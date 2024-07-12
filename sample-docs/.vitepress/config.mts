import { defineConfig } from 'vitepress'
import ExportToEpubPlugin from '../../plugins/exportToEpub';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Book Project",
  description: "A VitePress Site",
  base: '/gitzza-plaza/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Book',
        items: [
          { text: 'Cover', link: '/cover' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  } /*,
  vite: {
    plugins: [ExportToEpubPlugin]
  } */
})
