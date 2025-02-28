import { defineConfig } from 'vitepress'
// import mdIt from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItContainer from 'markdown-it-container'
import ExportToEpubPlugin from '../../plugins/exportToEpub';
import mdItYamlFrontmatter from 'markdown-it-front-matter'
import { withMermaid } from "vitepress-plugin-mermaid";
import { sidebar } from './sidebar'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  //defineConfig({
    title: "A BrunchBook Project",
    description: "VitePress site for Brunchstory Book “Git drawing.”",
    base: '/gitzza-plaza/sample-docs/',
    locales: {
      root: {
        label: '한국어',
        lang: 'ko'
      },
      en: {
        label: 'English',
        lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
        link: '/en/' // default /fr/ -- shows on navbar translations menu, can be external
        // other locale specific properties...
      }
    },
    outDir: '../.vitepress-dist/gitzza-plaza/sample-docs',
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Examples', link: '/markdown-examples' }
      ],
      sidebar,
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ],

      outline: 'deep',
    }, /*,
    vite: {
      plugins: [ExportToEpubPlugin]
    } */
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
        md.use(markdownItContainer, "section-header", {
          render: function(tokens, idx) {
            var m = tokens[idx].info.trim().match(/^section-header\s+`([^`]+)`\s+`([^`]+)`\s+`([^`]+)`$/);;
            if (tokens[idx].nesting === 1) {
              return (
                "<CustomComponent lead=\"" + m[1] + "\" title=\"" + m[2] + "\" data-type=\"" + m[3] + "\">\n"
              );
            } else {
              return "</CustomComponent>\n";
            }
          }
        });
      }, /*
      extendMarkdown: md => {
      } */
    },
    // optionally, you can pass MermaidConfig
    mermaid: {
      // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
    // optionally set additional config for plugin itself with MermaidPluginConfig
    mermaidPlugin: {
      class: "mermaid my-class", // set additional css classes for parent container 
    },
  // })
})