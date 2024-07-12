import { defineUserConfig } from 'vitepress-export-pdf'

const routeOrder = [
  '/cover.html',
  '/index.html',
  '/markdown-examples.html',
  '/api-examples.html',
  // ...
];

export default defineUserConfig({
  // routePatterns: ['!/index.html'],
  outDir: './sample-docs/dist-pdf',
  pdfOptions: {
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    // headerTemplate,
    // footerTemplate,
    /* margin: {
        bottom: 60,
        left: 25,
        right: 25,
        top: 60,
    }, */
  },
  sorter: (pageA, pageB) => {
    const aIndex = routeOrder.findIndex(route => route === pageA.path)
    const bIndex = routeOrder.findIndex(route => route === pageB.path)
    return aIndex - bIndex
  }
});