import { defineUserConfig } from 'vitepress-export-pdf'

const routeOrder = [
  // '/dummy/scripts/cover.html',
  '/gitzza-plaza/dummy/scripts/index.html',
  '/gitzza-plaza/dummy/scripts/table-of-contents.html',
  '/gitzza-plaza/dummy/scripts/body.html',
  // ...
];

export default defineUserConfig({
  // routePatterns: ['!/index.html'],
  routePatterns: [
    '!/gitzza-plaza/dummy/scripts/cover.html',
    '!/gitzza-plaza/dummy/scripts/scene*/**/*.html'
  ],
  outDir: 'dummy/scripts/dist-pdf',
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