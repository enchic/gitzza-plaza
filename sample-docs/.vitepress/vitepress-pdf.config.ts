import { defineUserConfig } from 'vitepress-export-pdf'

const routeOrder = [
  '/cover.html',
  '/markdown-examples.html',
  '/api-examples.html',
  // ...
];

export default defineUserConfig({
  routePatterns: ['!/index.html'],
  sorter: (pageA, pageB) => {
    const aIndex = routeOrder.findIndex(route => route === pageA.path)
    const bIndex = routeOrder.findIndex(route => route === pageB.path)
    return aIndex - bIndex
  },
  pdfOptions: {
    printBackground: true
  }
});