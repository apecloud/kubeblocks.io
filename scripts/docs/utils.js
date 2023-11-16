const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const versionsConfig = require("../../config/versions");
const sidebars = require("../../config/sidebars.js");
const { version } = require("os");
const kb_repos = "https://github.com/apecloud/kubeblocks.git";
const cli_repos = "https://github.com/apecloud/kbcli.git"

const root = path.join(__dirname, "../../");
const temp_dir = path.join(root, ".temp");
const versions_filepath = path.join(root, "versions.json");

const docs_dir = path.join(root, "docs");
const versioned_docs_dir = path.join(root, "versioned_docs");
const versioned_sidebars_dir = path.join(root, "versioned_sidebars");

const makeDocsDirEmpty = (dir) => {
  if (fs.existsSync(dir)) {
    if (fs.statSync(dir).isDirectory()) {
      fs.rmSync(dir, { recursive: true })
    }
  }
  fs.mkdirSync(dir);
}

const cloneOrPullKubeBlocks = (version) => {
  const tempDirExisted = fs.existsSync(temp_dir) && fs.statSync(temp_dir).isDirectory();
  const branch = versionsConfig.find(c => c.version === version)?.branch || "main"

  if (!tempDirExisted) fs.mkdirSync(temp_dir);

  const versionDir = path.join(temp_dir, version);
  const versionDirExist = fs.existsSync(versionDir);

  const command = versionDirExist ? `cd ${versionDir} && git pull` : `git clone -b ${branch} ${kb_repos} ${versionDir}`;

  console.log(`> ${versionDirExist ? "pull" : "clone"} ${branch}:  ${command} \n`);

  const stdout = execSync(command).toString();

  console.log(`${stdout}\n`);
}

const createKubeBlocksDocsVersion = (version) => {
  const sourceDir = path.join(temp_dir, `${version}/docs`);
  const sidebarConfigPathname = path.join(versioned_sidebars_dir, `version-${version}-sidebars.json`);
  const config = versionsConfig.find(c => c.version === version);
  const sidebar = config?.sidebar || sidebars;

  if (!fs.existsSync(sourceDir)) cloneOrPullKubeBlocks(version);

  if (version === "main") {
    fs.cpSync(sourceDir, docs_dir, { recursive: true });
  } else {
    fs.cpSync(sourceDir, `${versioned_docs_dir}/version-${version}`, { recursive: true });
    fs.writeFileSync(sidebarConfigPathname, JSON.stringify(sidebar));
  }
}

const cloneOrPullKbcli = (version) => {
  const tempDirExisted = fs.existsSync(temp_dir) && fs.statSync(temp_dir).isDirectory();
  const branch = versionsConfig.find(c => c.version === version)?.branch || "main"

  if (!tempDirExisted) fs.mkdirSync(temp_dir);
  const kbcli_version = path.join("kbcli", version)
  const versionDir = path.join(temp_dir, kbcli_version);
  const versionDirExist = fs.existsSync(versionDir);

  const command = versionDirExist ? `cd ${versionDir} && git pull` : `mkdir -p ${versionDir} && cd ${versionDir} && git clone -b ${branch} ${cli_repos} ${versionDir}`;

  console.log(`> ${versionDirExist ? "pull" : "clone"} ${branch}:  ${command} \n`);

  const stdout = execSync(command).toString();

  console.log(`${stdout}\n`);
}

const createKbcliDocsVersion = (version) => {
  const kbcli_version = path.join("kbcli", version)
  const sourceDir = path.join(temp_dir, `${kbcli_version}/docs`);
  const config = versionsConfig.find(c => c.version === version);
  const sidebar = config?.sidebar || sidebars;
  if (!fs.existsSync(sourceDir)) cloneOrPullKubeBlocks(version);

  if (version === "main") {
    fs.cpSync(sourceDir, docs_dir, { recursive: true });
  } else {
    fs.cpSync(sourceDir, `${versioned_docs_dir}/version-${version}`, { recursive: true });
    fs.writeFileSync(sidebarConfigPathname, JSON.stringify(sidebar));
  }
}

const clear = () => {
  fs.writeFileSync(versions_filepath, "[]");
  [docs_dir, versioned_docs_dir, versioned_sidebars_dir].forEach(dir => makeDocsDirEmpty(dir))
}

const reset = () => {
  clear();
  const versions = versionsConfig.map(c => c.version);
  fs.writeFileSync(versions_filepath, JSON.stringify(versions));
  versionsConfig.forEach((config) => createKubeBlocksDocsVersion(config.version));
  createKubeBlocksDocsVersion("main")
  
  versionsConfig.forEach((config) => {
    if (config.version !== "release-0.5" && config.version !== "release-0.6" && config.version !== "release-0.7"){
      createKbcliDocsVersion(config.version)
    }
  });
  createKbcliDocsVersion("main")
}

const sync = () => {
  versionsConfig.forEach((config) => cloneOrPullKubeBlocks(config.version));
  cloneOrPullKubeBlocks("main");
  versionsConfig.forEach((config) => {
    if (config.version !== "release-0.5" && config.version !== "release-0.6" && config.version !== "release-0.7"){
      cloneOrPullKbcli(config.version)
    }
  });
  cloneOrPullKbcli("main")
  reset();
}



module.exports = { sync, reset, clear };

