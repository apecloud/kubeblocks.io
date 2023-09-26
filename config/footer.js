module.exports = {
  style: "light",
  links: [
    {
      title: "Products",
      items: [
        {
          label: "KubeBlocks",
          href: "/",
        },
      ],
    },
    {
      title: "Resources",
      items: [
        {
          label: "User Docs",
          to: "/docs/preview/user_docs/overview/introduction",
        },
        {
          label: "Developer Docs",
          to: "/docs/preview/developer_docs/overview",
        },
        {
          label: "Blogs",
          href: "/blog",
        },
        {
          label: "Demo",
          href: "/demo",
        },
      ],
    },
    {
      title: "Company",
      items: [
        {
          label: "About us",
          href: "/",
        },
        {
          label: "News",
          href: "/",
        },
      ],
    },
    {
      title: "Contact us",
      items: [
        {
          html: `
              <span class="contact-span">
                <a href="mailto:kubeblocks@apecloud.com" target="_blank" rel="noreferrer noopener">
                  Email
                </a>
              </span>
            `,
        },
        {
          html: `
              <span class="contact-span">
                <a href="https://twitter.com/KubeBlocks" target="_blank" rel="noreferrer noopener">
                  Twitter
                </a>
              </span>
            `,
        },
        {
          html: `
              <span class="contact-span">
                <a href="https://join.slack.com/t/kubeblocks/shared_invite/zt-23vym7xpx-Xu3xcE7HmcqGKvTX4U9yTg" target="_blank" rel="noreferrer noopener">
                  Slack
                </a>
              </span>
            `,
        },
      ],
    },
  ],
  logo: {
    alt: 'Logo',
    src: 'img/logo.png',
    href: '/',
    width: 72,
    height: 18,
  },
  copyright: `© 2023 ApeCloud PTE. Ltd.`,
}
