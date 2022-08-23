# OpenCLI使用手册
## 前置条件
在部署之前，必须完成以下准备工作以满足部署条件。
- 下载Docker.dmg，执行如下命令在本地安装并启动 Docker。安装操作具体指引参见：[Install Docker Desktop on Mac](https://docs.docker.com/desktop/install/mac-install/)。
  ```
  sudo hdiutil attach Docker.dmg
  sudo /Volumes/Docker/Docker.app/Contents/MacOS/install
  sudo hdiutil detach /Volumes/Docker
  ```
- 本地安装 MySQL Shell，用于本地访问MySQL 实例。下载地址及安装操作具体指引参见：[Install MySQL Shell on macOS](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install-macos-quick.html)。
  > 1. Download the package from http://dev.mysql.com/downloads/shell/.
  > 2. Double-click the downloaded DMG to mount it. Finder opens.
  > 3. Double-click the .pkg file shown in the Finder window.
  > 4. Follow the steps in the installation wizard.
  > 5. When the installer finishes, eject the DMG. (It can be deleted.)
- 执行如下内容，在本地安装 kubectl。安装操作具体指引参见：[Install and Set Up kubectl on macOS](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/)。
  ```
  curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/arm64/kubectl"
  ```
- 准备好AWS AK，且该账户需具备VPC/Internet Gateway/Subnet/Route Table/Security Group/EC2资源的查询和变更权限。

    > **注意**
    >
    > 部署及使用功能过程中，请勿切换网络。切换网络将导致出口IP变化，可能导致连接失败。
