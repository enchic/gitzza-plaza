import { defineUserConfig } from 'vitepress-export-pdf'

const routeOrder = [
  '/gitzza-plaza/cover.html',
  '/gitzza-plaza/table-of-contents.html',
  '/gitzza-plaza/body.html',
  '/gitzza-plaza/index.html',
  '/gitzza-plaza/markdown-examples.html',
  '/gitzza-plaza/api-examples.html',
  // ...
];

export default defineUserConfig({
  // routePatterns: ['!/index.html'],
  routePatterns: ['!/gitzza-plaza/cover.html'],
  outDir: './sample-docs/dist-pdf',
  pdfOptions: {
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    // headerTemplate,
    // footerTemplate,
    /* margin: {
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
    } */
    margin: {
        bottom: 60,
        left: 25,
        right: 25,
        top: 60,
    }
  },
  sorter: (pageA, pageB) => {
    const aIndex = routeOrder.findIndex(route => route === pageA.path)
    const bIndex = routeOrder.findIndex(route => route === pageB.path)
    return aIndex - bIndex
  }
});