module.exports = {
  title: 'KiCad_FreeCAD',
  description: 'Cursus KiCad &amp; FreeCAD',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: 'https://www.oost-vlaanderen.be/leren/onderwijs/overzicht-provincialescholen/secundair-onderwijs/richtpunt-campus-zottegem.html' },
      { text: 'License', link: '/LICENSE.md' },
    ],
    sidebar: [
      ['/', 'Home'],
      ['/ki-cad/', 'KiCad'],
      ['/free-c-a-d/', 'FreeCAD'],
      ['/freecad/', 'Freecad']
    ],
    repo: 'https://github.com/JanGillis/KiCad_FreeCAD',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
