import { defineUserConfig } from 'vitepress-export-pdf'

const routeOrder = [
  // '/dummy/novel-7chapters/cover.html',
  '/gitzza-plaza/dummy/novel-7chapters/index.html',
  '/gitzza-plaza/dummy/novel-7chapters/table-of-contents.html',
  '/gitzza-plaza/dummy/novel-7chapters/body.html',
  // ...
];

export default defineUserConfig({
  // routePatterns: ['!/index.html'],
  routePatterns: [
    '!/gitzza-plaza/dummy/novel-7chapters/cover.html',
    '!/gitzza-plaza/dummy/novel-7chapters/chapter*/**/*.html'
  ],
  outDir: 'dummy/novel-7chapters/dist-pdf',
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