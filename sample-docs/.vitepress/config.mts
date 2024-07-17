import { defineConfig } from 'vitepress'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItContainer from 'markdown-it-container'
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
          { text: 'Cover', link: '/cover' },
          { text: 'Table of contents', link: '/table-of-contents' }
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
 ,
 markdown: {
    // options for markdown-it-anchor
    // anchor: { permalink: markdownItAnchor.permalink.headerLink() },
    // options for markdown-it-toc
    //toc: { level: [1, 2] },
    config: md => {
      // use more markdown-it plugins!
      // md.use(extendMarkdown)
      md.use(markdownItContainer, "face", {
        /* validate: function(params: string) {
          return params.trim().match(/^face\s+(.*)$/);
        }, */
        render: function(tokens, idx) {
          // var m = tokens[idx].info.trim().match(/^face\s+(.*)$/);

          if (tokens[idx].nesting === 1) {
            // opening tag
            return (
              // "<div class=\"box blank face\">" + m[1] + "\n"
              "<div class=\"box blank face\">\n"
            );
          } else {
            // closing tag
            return "</div>\n";
          }
        }
      });
    }, /*
    extendMarkdown: md => {
    } */
  }
})
