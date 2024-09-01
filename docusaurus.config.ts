import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SecureVault Docs',
  tagline: 'Your trusted guide to effective password management',
  favicon: 'img/lock.png',

  // Set the production url of your site here
  url: 'https://my-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          
          includeCurrentVersion: false,
          lastVersion: '1.1.0',
          versions: {
            '1.1.0': {
            label: '1.1.0',
            path: '1.1.0',
            banner: 'none',
            },
          }, 
        },

        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'newdocs',
        path: 'newdocs',
        routeBasePath: 'newdocs',
        sidebarPath: './test-sidebars.ts',
        // ... other options
      },

    ],
  ],

  

  themeConfig: {

    metadata: [
      { name: 'og:title', content: 'SecureVault docs' },
      { name: 'og:description', content: 'Documentation website' },
      { name: 'og:image', content: 'https://mytwproject.netlify.app/' },
      { name: 'og:url', content: 'https://mytwproject.netlify.app/' },
    ],
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'SecureVault Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/lock.png',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownActiveClassDisabled: true,
         },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'User guide',
        },
        {to: '/newdocs/checklist', label: 'Resources', position: 'left'},
        {
          to: '/versioned_docs/version-1.1.0/glossary', // Ensure this path is correct
          position: 'left',
        },
        {
          href: 'https://www.linkedin.com/in/yauheniya-krasnikava-b56284217/',
          label: 'LinkedIn',
          position: 'right', // Positions the link on the right side of the navbar
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
              label: 'Get started',
              to: '/docs/1.1.0/category/get-started-with-securevault',
            },
            {
              label: 'Troubleshooting',
              to: '/docs/1.1.0/category/troubleshooting',
            },
            {
              label: 'Release notes',
              to: '/docs/1.1.0/category/release-notes',
            },
            {
              label: 'Glossary',
              to: '/docs/1.1.0/category/glossary',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Community forums',
              href: 'https://community.bitwarden.com/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/yauheniya-krasnikava-b56284217/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Resources',
              to: '/newdocs/checklist',
            },
            {
              label: 'Support',
              href: '',
              href: 'https://bitwarden.com/contact/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Technical Writing Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};


export default config;
