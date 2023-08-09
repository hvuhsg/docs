// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YOYO Docs',
  tagline: 'All side projects docs',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.yehoyada.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yehoyada', // Usually your GitHub org/user name.
  projectName: 'yoyo-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'YOYO Docs',
        logo: {
          alt: 'YOYO Docs Logo',
          src: 'img/logo.png',
        },
        items: [
          { to: 'blog', label: 'Blog', position: 'left' },
          {
            type: 'dropdown',
            label: 'Projects',
            position: 'left',
            items: [
              {
                label: 'yoyocoin',
                to: 'docs/yoyocoin',
              },
              {
                label: 'lokidb',
                to: 'docs/lokidb/server',
              },
              {
                label: 'mongolite',
                to: 'docs/mongolite',
              },
              {
                label: 'kiko',
                to: 'docs/kiko',
              },
              {
                label: 'gptcli',
                to: 'docs/gptcli',
              },
              {
                label: 'gomongo',
                to: 'docs/gomongo',
              },
              {
                label: 'GoAPI',
                to: 'docs/goapi',
              },
              {
                label: 'twallet',
                to: 'docs/twallet',
              },
              {
                label: 'py-bloom-filter',
                to: 'docs/py-bloom-filter',
              },
              {
                label: 'ants',
                to: 'docs/ants',
              },
            ],
          },
          {
            href: 'https://github.com/hvuhsg',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Portfolio',
                href: 'https://portfolio.yehoyada.com',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/yoyo_programming',
              },
              {
                label: 'Github',
                href: 'https://github.com/hvuhsg',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/yehoyada/',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@yehoyada_55829',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} YOYO Docs, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
