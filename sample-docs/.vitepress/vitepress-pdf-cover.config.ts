import { defineUserConfig } from 'vitepress-export-pdf'
import { timeTransformer } from '@condorhero/vuepress-plugin-export-pdf-core'

const routeOrder = [
  // ...
];

export default defineUserConfig({
  // routePatterns: ['!/index.html'],
  routePatterns: ['!!/gitzza-plaza/cover.html'],
  outFile: `vitepress-${timeTransformer()}-cover.pdf`,
  outDir: './sample-docs/dist-pdf',
  pdfOptions: {
    format: 'A4',
    // pageRanges: '1',
    printBackground: true,
    displayHeaderFooter: true,
    // headerTemplate,
    // footerTemplate,
    margin: {
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
    }
  } /*,
  sorter: (pageA, pageB) => {
    const aIndex = routeOrder.findIndex(route => route === pageA.path)
    const bIndex = routeOrder.findIndex(route => route === pageB.path)
    return aIndex - bIndex
  } */
});