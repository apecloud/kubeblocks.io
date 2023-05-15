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
          label: "Docs",
          to: "/docs/preview/user_docs/introduction",
        },
        {
          label: "Blogs",
          href: "/blog",
        },
        {
          label: "Webinar",
          href: "/",
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
                <a href="/" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  Email
                </a>
              </span>
            `,
        },
        {
          html: `
              <span class="contact-span">
                <a href="https://twitter.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  Twitter
                </a>
              </span>
            `,
        },
        {
          html: `
              <span class="contact-span">
                <a href="https://slack.com/" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  Slack
                </a>
              </span>
            `,
        },
        {
          html: `
              <span class="contact-span">
                <a href="https://www.linkedin.com/company/apecloud-technology-co-ltd/about/" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  Linkedin
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
  copyright: `© 2023 ApeCloud Co., Ltd.`,
}