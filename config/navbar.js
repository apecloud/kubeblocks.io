module.exports = {
  logo: {
    alt: "Logo",
    src: "img/logo.png",
    width: 70,
    height: 28,
  },
  items: [
    {
      type: "doc",
      docId: "user_docs/README",
      position: "left",
      label: "Documentation",
    },
    {to: '/blog', label: 'Blog', position: 'left'},
    {
      type: "doc",
      docId: "release_notes/v0.3.6",
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
  style: "dark"
}
