module.exports = {
  logo: {
    alt: "Logo",
    src: "img/logo.png",
  },
  items: [
    {
      label: 'User Docs',
      type: 'doc',
      position: 'left',
      docId: 'user_docs/overview/introduction',
    },
    {
      label: 'Developer Docs',
      type: 'doc',
      position: 'left',
      docId: 'developer_docs/overview',
    },
    {to: '/blog', label: 'Blogs', position: 'left'},
    {to: '/demo', label: 'Demo', position: 'left'},
    // {
    //   type: 'docsVersionDropdown',
    //   position: 'right',
    // },
    {
      type: "localeDropdown",
      className: "header-locale-dropdown",
      position: "right",
      dropdownItemsAfter: [
        {
          to: "https://cn.kubeblocks.io/",
          label: "中文",
          target: "_self"
        },
      ],
    },
    {
      href: 'https://github.com/apecloud/kubeblocks',
      position: 'right',
      className: 'header-github-link',
      label: "Go to GitHub",
    },
  ],
  // style: "dark",
  // style: "primary",
}


