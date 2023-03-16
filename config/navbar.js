module.exports = {
  logo: {
    alt: "Logo",
    src: "img/logo.png",
  },
  items: [
    {
      type: "doc",
      docId: "user_docs/introduction/introduction",
      position: "left",
      label: "Documentation",
    },
    {to: '/blog', label: 'Blog', position: 'left'},
    {
      type: "doc",
      docId: "release_notes/v0.4.0/v0.4.0",
      position: "right",
      label: "Release Notes",
    },
    {
      type: 'docsVersionDropdown',
      position: 'right',
    },
    {
      href: 'https://github.com/apecloud/kubeblocks',
      position: 'right',
      className: 'header-github-link',
    },
  ],
  // style: "dark",
  // style: "primary",
}