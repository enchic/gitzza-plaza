import { defineUserConfig } from 'vitepress-export-pdf'

const routeOrder = [
  '/gitzza-plaza/dummy/magazine/cover.html',
  // '/gitzza-plaza/dummy/magazine/index.html',
  '/gitzza-plaza/dummy/magazine/table-of-contents.html',
  '/gitzza-plaza/dummy/magazine/body.html',
  // ...
];

export default defineUserConfig({
  // routePatterns: ['!/index.html'],
  routePatterns: [
    '!/gitzza-plaza/dummy/magazine/index.html',
    '!/gitzza-plaza/dummy/magazine/chapter*/**/*.html'
  ],
  outDir: 'dummy/magazine/dist-pdf',
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
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
    }
  },
  sorter: (pageA, pageB) => {
    const aIndex = routeOrder.findIndex(route => route === pageA.path)
    const bIndex = routeOrder.findIndex(route => route === pageB.path)
    return aIndex - bIndex
  }
});