const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const versionsConfig = require("../../config/versions");
const sidebars = require("../../config/sidebars.js");
const repos = "https://github.com/apecloud/kubeblocks.git";

const root = path.join(__dirname, "../../");
const temp_dir = path.join(root, ".temp");
const versions_filepath = path.join(root, "versions.json");

const docs_dir = path.join(root, "docs");
const versioned_docs_dir = path.join(root, "versioned_docs");
const versioned_sidebars_dir = path.join(root, "versioned_sidebars");

const makeDocsDirEmpty = (dir) => {
  if (fs.existsSync(dir)) {
    if(fs.statSync(dir).isDirectory()) {
      fs.rmSync(dir, { recursive: true })
    }
  }
  fs.mkdirSync(dir);
}

const cloneOrPullKubeBlocks = (version) => {
  const tempDirExisted = fs.existsSync(temp_dir) && fs.statSync(temp_dir).isDirectory();
  const branch = versionsConfig.find(c => c.version === version)?.branch || "main"

  if(!tempDirExisted) fs.mkdirSync(temp_dir);

  const versionDir = path.join(temp_dir, version);
  const versionDirExist = fs.existsSync(versionDir);

  const command = versionDirExist ? `cd ${versionDir} && git pull` : `git clone -b ${branch} ${repos} ${versionDir}`;

  console.log(`> ${versionDirExist ? "pull" : "clone"} ${branch}:  ${command} \n`);

  const stdout = execSync(command).toString();

  console.log(`${stdout}\n`);
}

const createKubeBlocksDocsVersion = (version) => {
  const sourceDir = path.join(temp_dir, `${version}/docs`);
  const sidebarConfigPathname = path.join(versioned_sidebars_dir, `version-${version}-sidebars.json`);
  const config = versionsConfig.find(c => c.version === version);
  const sidebar = config?.sidebar || sidebars;

  if(!fs.existsSync(sourceDir)) cloneOrPullKubeBlocks(version);

  if(version === "main") {
    fs.cpSync(sourceDir, docs_dir, { recursive: true });
  } else {
    const p = `${versioned_docs_dir}/version-${version}`
    fs.cpSync(sourceDir, p, { recursive: true });

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
}

const sync = () => {
  versionsConfig.forEach((config) => cloneOrPullKubeBlocks(config.version));
  cloneOrPullKubeBlocks("main");
  reset();
}



module.exports = { sync, reset, clear };

