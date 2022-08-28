// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const navbarConfig = require("./config/navbar");
const footerConfig = require("./config/footer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ApeCloud",
  url: "https://apecloud.github.io",
  baseUrl: "/website/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  noIndex: true,
  organizationName: "apecloud",
  projectName: "website",
  trailingSlash: false,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    path: "i18n",
    localeConfigs: {
      en: {
        label: "English",
        htmlLang: "en-US",
      },
      zh: {
        label: "简体中文",
        htmlLang: "zh-CN",
      },
    },
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./config/sidebars.js"),
          editUrl: "https://github.com/apecloud/website/tree/developer",
        },
        blog: {
          editUrl: ({locale, blogDirPath, blogPath, permalink}) => `https://github.com/apecloud/website/tree/developer/${blogDirPath}/${blogPath}`,
        },
        theme: {
          customCss: require.resolve("./src/style/custom.less"),
        },
      },
    ],
  ],
  stylesheets: [],
  plugins: ["@docusaurus/theme-live-codeblock", "docusaurus-plugin-less"],
  themeConfig:
    {
      navbar: navbarConfig,
      footer: footerConfig,
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
