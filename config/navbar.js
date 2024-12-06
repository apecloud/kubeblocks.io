module.exports = {
  logo: {
    alt: "Logo",
    src: "img/logo.png",
  },
  items: [
    {
      label: 'User docs',
      type: 'docSidebar',
      position: 'left',
      sidebarId: 'userDocs',
    },
    {
      label: 'Developer docs',
      type: 'docSidebar',
      position: 'left',
      sidebarId: 'developerDocs',
    },
    {to: '/blog', label: 'Blogs', position: 'left'},
    {to: '/demo', label: 'Demo', position: 'left'},
    {
      type: "localeDropdown",
      className: "header-locale-dropdown",
      position: "right",
      dropdownItemsAfter: [
        {
          to: "https://cn.kubeblocks.io/",
          label: "简体中文",
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


