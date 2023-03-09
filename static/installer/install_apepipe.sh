#!/usr/bin/env bash

# apepipe location
: ${CLI_INSTALL_DIR:="/usr/local/bin"}
: ${CLI_BREW_INSTALL_DIR:="/opt/homebrew/bin"}

# aws plugins
: ${STEAMPIPE_PLUGIN_INSTALL_DIR:="$HOME/.steampipe/plugins/hub.steampipe.io/plugins/turbot/"}
: ${STEAMPIPE_PLUGIN_CONFIG_DIR:="$HOME/.steampipe/config"}
: ${AWS_PLUGIN_INSTALL_DIR:="$HOME/.steampipe/plugins/hub.steampipe.io/plugins/turbot/aws@latest"}
AWS_PLUGIN_FILENAME=steampipe-plugin-aws.plugin
AWS_PLUGIN_CONFIG_NAME=aws.spc
AWS_PLUGIN_FILE="${AWS_PLUGIN_INSTALL_DIR}/${AWS_PLUGIN_FILENAME}"
AWS_PLUGIN_CONFIG_FILE="${STEAMPIPE_PLUGIN_CONFIG_DIR}/${AWS_PLUGIN_CONFIG_NAME}"

## aws cli location
#: ${AWS_CLI_INSTALL_DIR:="/usr/local/bin"}
#: ${AWS_CLI_BREW_INSTALL_DIR:="/opt/homebrew/bin"}

# sudo is required to copy binary to CLI_INSTALL_DIR for linux
: ${USE_SUDO:="false"}

# Http request CLI
HTTP_REQUEST_CLI=curl

# apepipe filename
CLI_FILENAME=apepipe

# aws filename
AWS_CLI_FILENAME=aws

CLI_FILE="${CLI_INSTALL_DIR}/${CLI_FILENAME}"
CLI_BREW_FILE="${CLI_BREW_INSTALL_DIR}/${CLI_FILENAME}"

#AWS_CLI_FILE="${AWS_CLI_INSTALL_DIR}/${AWS_CLI_FILENAME}"
#AWS_CLI_BREW_FILE="${AWS_CLI_BREW_INSTALL_DIR}/${AWS_CLI_FILENAME}"

REPO="apecloud/apepipe"
GITHUB="https://api.github.com"
GITLAB_REPO="92815"
GITLAB="https://jihulab.com/api/v4/projects"
COUNTRY_CODE=""

getCountryCode() {
    COUNTRY_CODE=`curl -s ifconfig.io/country_code`
}

getSystemInfo() {
    ARCH=$(uname -m)
    case $ARCH in
        armv7*) ARCH="arm" ;;
        aarch64) ARCH="arm64" ;;
        x86_64) ARCH="amd64" ;;
    esac

    OS=$(echo $(uname) | tr '[:upper:]' '[:lower:]')

    # Most linux distro needs root permission to copy the file to /usr/local/bin
    if [[ "$OS" == "linux" || "$OS" == "darwin" ]] && [ "$CLI_INSTALL_DIR" == "/usr/local/bin" ]; then
        USE_SUDO="true"
    fi
}

verifySupported() {
    local supported=(darwin-amd64 darwin-arm64 linux-amd64 linux-arm linux-arm64)
    local current_osarch="${OS}-${ARCH}"

    for osarch in "${supported[@]}"; do
        if [ "$osarch" == "$current_osarch" ]; then
            echo "Your system is ${OS}_${ARCH}"
            return
        fi
    done

    echo "No prebuilt binary for ${current_osarch}"
    exit 1
}

runAsRoot() {
    local CMD="$*"

    if [ $EUID -ne 0 -a $USE_SUDO = "true" ]; then
        CMD="sudo $CMD"
    fi

    $CMD
}

checkHttpRequestCLI() {
    if type "curl" >/dev/null; then
        HTTP_REQUEST_CLI=curl
    elif type "wget" >/dev/null; then
        HTTP_REQUEST_CLI=wget
    else
        echo "Either curl or wget is required"
        exit 1
    fi
}

checkExistingCLI() {
    if [ -f "$CLI_FILE" ]; then
        echo -e "apepipe is detected: $CLI_FILE"
        checkApepipeInstalled
        exit 0
    elif [ -f "$CLI_BREW_FILE" ]; then
        echo -e "apepipe is detected: $CLI_BREW_FILE"
        checkApepipeInstalled
        exit 0
    else
        echo -e "Installing apepipe ...\n"
    fi
}

#checkExistingAwsCli() {
#    if [ -f "$AWS_CLI_FILE" ]; then
#        echo -e "\naws cli is detected: $AWS_CLI_FILE"
#        exit 1
#    elif [ -f "$AWS_CLI_BREW_FILE" ]; then
#        echo -e "\naws cli is detected: $AWS_CLI_BREW_FILE"
#        exit 1
#    else
#        echo -e "Installing aws cli ...\n"
#    fi
#}

getLatestRelease() {
    latest_release=""
    if [[ "$COUNTRY_CODE" == "CN" ]]; then
        releaseURL=$GITLAB/$GITLAB_REPO/repository/tags/latest
        if [ "$HTTP_REQUEST_CLI" == "curl" ]; then
            latest_release=`curl -s $releaseURL | grep 'message'|awk 'NR==1{print $1}'`
        else
            latest_release=`wget -q --header="Accept: application/json" -O - $releaseURL | grep 'tag_name'|awk 'NR==1{print $1}'`
        fi
        latest_release=${latest_release#*"message\":\""}
        latest_release=${latest_release%%"\","*}
    else
        releaseURL=$GITHUB/repos/$REPO/releases/latest
        if [ "$HTTP_REQUEST_CLI" == "curl" ]; then
            latest_release=$(curl -s $releaseURL | grep \"tag_name\" | awk 'NR==1{print $2}' | sed -n 's/\"\(.*\)\",/\1/p')
        else
            latest_release=$(wget -q --header="Accept: application/json" -O - $releaseURL | grep \"tag_name\" | awk 'NR==1{print $2}' | sed -n 's/\"\(.*\)\",/\1/p')
        fi
    fi
    ret_val=$latest_release
}

downloadFile() {
    LATEST_RELEASE_TAG=$1

    CLI_ARTIFACT="${CLI_FILENAME}-${OS}-${ARCH}-${LATEST_RELEASE_TAG}.tar.gz"
    DOWNLOAD_BASE="https://github.com/$REPO/releases/download"
    if [[ "$COUNTRY_CODE" == "CN" ]]; then
        DOWNLOAD_BASE="$GITLAB/$GITLAB_REPO/packages/generic/apepipe"
    fi
    DOWNLOAD_URL="${DOWNLOAD_BASE}/${LATEST_RELEASE_TAG}/${CLI_ARTIFACT}"
    # Create the temp directory
    CLI_TMP_ROOT=$(mktemp -dt apepipe-install-XXXXXX)
    ARTIFACT_TMP_FILE="$CLI_TMP_ROOT/$CLI_ARTIFACT"

    echo "Downloading ..."
    if [ "$HTTP_REQUEST_CLI" == "curl" ]; then
        curl -SL --header 'Accept:application/octet-stream' "$DOWNLOAD_URL" -o "$ARTIFACT_TMP_FILE"
    else
        wget -q --show-progress -O "$ARTIFACT_TMP_FILE" "$DOWNLOAD_URL"
    fi

    if [[ $? -ne 0 || ! -f "$ARTIFACT_TMP_FILE" ]]; then
        echo "Failed to download $CLI_ARTIFACT."
        exit 1
    fi
}

installFile() {
    local tmp_root_apepipe="$CLI_TMP_ROOT/${OS}-${ARCH}/$CLI_FILENAME"
    tar xf "$ARTIFACT_TMP_FILE" -C "$CLI_TMP_ROOT"

    if [[ $? -ne 0 || ! -f "$tmp_root_apepipe" ]]; then
        echo "Failed to unpack apepipe executable."
        exit 1
    fi

    chmod o+x "$tmp_root_apepipe"
    runAsRoot cp "$tmp_root_apepipe" "$CLI_INSTALL_DIR"
}

checkApepipeInstalled() {
      if [ $? -eq 0 ] && [ -f "$CLI_FILE" ]; then
          echo "apepipe installed successfully."
          echo -e "Make sure your cloud access keys are active and begin your journey with apepipe:\n"
          echo -e "\t$CLI_FILENAME query database"
          echo -e ""
      else
          echo "Failed to install $CLI_FILENAME"
          exit 1
      fi
}

installAwsCli() {
    if aws --version &>/dev/null; then
        echo "aws cli is already installed."
    else
    	  echo "installing aws"
    	  if curl --version &>/dev/null; then
            echo "Downloading the aws package..."
            if [[ "$COUNTRY_CODE" == "CN" ]]; then
                curl "https://jihulab.com/apecloud/apepipe/-/package_files/19880/download" -o "AWSCLIV2.pkg" &>/dev/null
            else
                curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg" &>/dev/null
            fi
            # todo: support linux install
            echo "Installing the aws package..."
            sudo installer -pkg ./AWSCLIV2.pkg -target / &>/dev/null
#            spawn sudo installer -pkg ./AWSCLIV2.pkg -target / &>/dev/null
#            expect "*assword:*"
#            send "$password\r"
    	  else
    		    echo "curl is not installed"
    		    exit 1
        fi
    	  echo "aws is not installed. / Could not be installed."
    fi
}


installSteampipe() {
    if steampipe --version &>/dev/null; then
        echo "steampipe is already installed."
    else
    	  echo "installing steampipe"
    	  if curl --version &>/dev/null; then
            echo "Downloading the steampipe package..."
            if [[ "$COUNTRY_CODE" == "CN" ]]; then
                sudo /bin/sh -c "$(curl -fsSL https://jihulab.com/api/v4/projects/92815/packages/generic/apepipe/v0.0.1-test/install_steampipe.sh)" &>/dev/null
            else
                sudo /bin/sh -c "$(curl -fsSL https://raw.githubusercontent.com/turbot/steampipe/main/install.sh)" &>/dev/null
            fi
    	  else
    		    echo "curl is not installed"
    		    exit 1
        fi
    	  echo "steampipe is not installed. / Could not be installed."
    fi
}

installSteampipeAwsPlugin() {
    if [ -f "$AWS_PLUGIN_FILE" ]; then
        echo "steampipe aws plugin is already installed."
    else
    	  echo "installing steampipe aws plugin"
    	  if [[ "$COUNTRY_CODE" == "CN" ]]; then
            # Create the temp directory
            PLUGIN_TMP_ROOT=$(mktemp -dt steampipe-plugin-install-XXXXXX)
            AWS_PLUGIN_TMP_FILE="$PLUGIN_TMP_ROOT/steampipe-aws-plugin-latest.tar.gz"
            echo "Downloading ..."
            if [ "$HTTP_REQUEST_CLI" == "curl" ]; then
                curl -SL --header 'Accept:application/octet-stream' "https://jihulab.com/apecloud/apepipe/-/package_files/20015/download" -o "$AWS_PLUGIN_TMP_FILE"
                curl -SL "https://jihulab.com/apecloud/apepipe/-/package_files/20016/download" -o "$AWS_PLUGIN_CONFIG_FILE"
            else
                wget -q --show-progress -O "$AWS_PLUGIN_TMP_FILE" "https://jihulab.com/apecloud/apepipe/-/package_files/20015/download"
                wget -q --show-progress -O "$AWS_PLUGIN_CONFIG_FILE" "https://jihulab.com/apecloud/apepipe/-/package_files/20016/download"
            fi
            mkdir -p "$STEAMPIPE_PLUGIN_INSTALL_DIR"
            tar xf "$AWS_PLUGIN_TMP_FILE" -C "$STEAMPIPE_PLUGIN_INSTALL_DIR"

    	  else
    	      steampipe plugin install aws
    	  fi
    fi
}

fail_trap() {
    result=$?
    if [ "$result" != "0" ]; then
        echo "Failed to install apepipe"
        echo "Go to https://kubeblocks.io for more support."
    fi
    cleanup
    exit $result
}

cleanup() {
    if [[ -d "${CLI_TMP_ROOT:-}" ]]; then
        rm -rf "$CLI_TMP_ROOT"
    fi
}

installCompleted() {
    echo -e "\nFor more information on how to get started, please visit:"
    echo "  https://kubeblocks.io"
}

# -----------------------------------------------------------------------------
# main
# -----------------------------------------------------------------------------
trap "fail_trap" EXIT

getSystemInfo
verifySupported
getCountryCode
installAwsCli
installSteampipe
installSteampipeAwsPlugin
checkExistingCLI
checkHttpRequestCLI


if [ -z "$1" ]; then
    echo "Getting the latest apepipe ..."
    getLatestRelease
elif [[ $1 == v* ]]; then
    ret_val=$1
else
    ret_val=v$1
fi

downloadFile $ret_val
installFile
checkApepipeInstalled
cleanup
installCompleted
