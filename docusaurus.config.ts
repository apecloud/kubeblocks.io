import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)


const navbarConfig = require("./config/navbar");
const footerConfig = require("./config/footer");
const versionsConfig = require("./config/versions");
const lastVersion = versionsConfig[0]?.version || "current";
const TIMESTAMP = new Date().getTime();
const versions = (() => {
  const _versions = {
    current: {
      label: "Preview",
      path: "preview",
    },
  };
  versionsConfig.forEach((config) => {
    Object.assign(_versions, {
      [config.version]: {
        label: config.version,
        path: config.version,
      },
    });
  });
  return _versions;
})();

const config: Config = {
  title: "KubeBlocks",
  tagline: "Run Any Database on Kubernetes",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://kubeblocks.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ApeCloud', // Usually your GitHub org/user name.
  projectName: 'kubeblocks.io', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        label: "English",
        htmlLang: "en-US",
      },
    },
  },
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "version",
        content: String(TIMESTAMP),
      },
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve("./config/sidebars"),
          versions,
          lastVersion,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          postsPerPage: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/style/custom.less',
        },
        gtag: {
          trackingID: "G-1P80WT42PB",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "hourly",
          priority: 0.5,
          ignorePatterns: ["/blog/**"].concat(
            versionsConfig.map((c) => `/docs/${c.version}/**`)
          ),
          filename: "sitemap.xml",
        },
      } satisfies Preset.Options,
    ],
  ],
  scripts: [
    {
      src: "/js/kubechat.js",
      defer: true,
    },
  ],
  stylesheets: [],
  plugins: [
    "@docusaurus/theme-live-codeblock", 
    "docusaurus-plugin-less",
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: navbarConfig,
    footer: footerConfig,
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: "NRQ28YPQ0N",
      apiKey: "cc5d86733eacd9eedb631ab9b39e719f",
      indexName: "kubeblocks-us",
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    preprocessor: ({filePath, fileContent}) => {
      // fix bug for cluster.md
      if((new RegExp('api-reference/(cluster|add-on|backup).md')).test(filePath)) {
        return fileContent
          .replace(/<h3([^>]*)>/g, (match, attr) => '<h3' + attr + '>\n')
          .replace(/<\/h3>/g, '\n</h3>')
          .replace(/<pre><code([^>]*)>/g, (match, attr) => '<pre>\n<code' + attr + '>\n')
          .replace(/<\/code><\/pre>/g, '</code>\n</pre>')
          .replace(/<code>(.*?)\s*<\/code>/g, (match, content) => '`' + content + '`')
          .replace(/<p>/g, '<p>\n')
          .replace(/<\/p>/g, '\n</p>')
          .replace(/<li>/g, '<li>\n')
          .replace(/<\/li>/g, '\n</li>')
          .replace(/<tr>/g, '<tr>\n')
          .replace(/<\/tr>/g, '\n</tr>')
          .replace(/<td>/g, '<td>\n')
          .replace(/<\/td>/g, '\n</td>');
      }

      return fileContent;
    },
  },
};

export default config;
