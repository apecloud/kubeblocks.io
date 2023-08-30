module.exports = {
  logo: {
    alt: "Logo",
    src: "img/logo.png",
  },
  items: [
    {
      label: 'Docs',
      type: 'dropdown',
      position: 'left',
      items: [
        {
          label: 'User Docs',
          type: 'doc',
          docId: 'user_docs/overview/introduction',
        },
        {
          label: 'Developer Docs',//api
          type: 'doc',
          docId: 'release_notes/v0.4.0/v0.4.0',
        },
        // {
        //   label: 'Fault Injection',
        //   type: 'doc',
        //   docId: 'fault_injection',
        // },
        // {
        //   label: 'Integration',
        //   type: 'doc',
        //   docId: 'integration',
        // },
      ],
    },
    {to: '/blog', label: 'Blogs', position: 'left'},
    {to: '/demo', label: 'Demo', position: 'left'},
    // {
    //   type: 'docsVersionDropdown',
    //   position: 'right',
    // },
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
