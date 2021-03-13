module.exports = {
  title: 'A Level Biology: iodli',
  tagline: 'A Level Biology',
  url: 'https://albio.iod.li',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'iodli', // Usually your GitHub org/user name.
  projectName: 'A Level Biology', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'A Level Biology: iodli',
      logo: {
        alt: 'iodli',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
      ],
      copyright: `This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License == Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/sgdwn/docusaurus',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
