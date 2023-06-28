// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GraphDB AWS deployment guide',
  // tagline: 'GraphDB AWS deployment guide',
  favicon: 'img/favicon.ico',
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
  // Set the production url of your site here
  url: 'https://ontotext-ad.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/graphdb-aws-deployment-guide/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ontotext-AD', // Usually your GitHub org/user name.
  projectName: 'graphdb-aws-deployment-guide', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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

      navbar: {
        title: 'GraphDB AWS Deployment Guide',
        style:'dark',
        logo: {
          alt: 'Ontotext logo',
          src: 'img/logo.svg',
        },
      },
      footer:{
        style: 'dark',
        copyright: `© Copyright <a href="http://www.ontotext.com">Ontotext AD</a> ${new Date().getFullYear()} All rights reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
