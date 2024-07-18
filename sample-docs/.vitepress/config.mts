import { defineConfig } from 'vitepress'
// import mdIt from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItContainer from 'markdown-it-container'
import ExportToEpubPlugin from '../../plugins/exportToEpub';
import mdItYamlFrontmatter from 'markdown-it-front-matter'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "A BrunchBook Project",
  description: "VitePress site for Brunchstory Book “Git drawing.”",
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
        text: 'VitePress examples',
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
      md.use(markdownItContainer, "toc", {
        render: function(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return (
              "<div class=\"toc\">\n"
            );
          } else {
            return "</div>\n";
          }
        }
      });
      md.use(markdownItContainer, "no-print", {
        render: function(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return (
              "<div class=\"no-print\">\n"
            );
          } else {
            return "</div>\n";
          }
        }
      });
      md.use(mdItYamlFrontmatter, fm => {
        // md.frontmatter = fm;

        // Process frontmatter here if needed
        console.log(fm); // For example, just log the frontmatter
      });
    }, /*
    extendMarkdown: md => {
    } */
  }
})
