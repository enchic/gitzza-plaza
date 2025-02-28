import gitzza from './data/novel-7chapters.json'

// 등장인물별 페이지 생성
const characterPages = Object.entries(gitzza.Characters).map(([name, fullName]) => ({
  text: name,
  link: `/character-flow/${name}`
}))

export const sidebar = [
  {
    text: 'Book',
    items: [
      { text: 'Cover', link: '/cover' },
      { text: 'Table of contents', link: '/table-of-contents' },
      {
        text: 'Body',
        link: '/body',
        items: [
          {
            text: 'Chapter 1',
            link: '/chapter1/',
            items: [
              { text: 'Episode 1', link: '/chapter1/episode1' },
              { text: 'Episode 2', link: '/chapter1/episode2' },
              { text: 'Episode 3', link: '/chapter1/episode3' },
              { text: 'Episode 4', link: '/chapter1/episode4' },
              { text: 'Episode 5', link: '/chapter1/episode5' },
              { text: 'Episode 6', link: '/chapter1/episode6' },
              { text: 'Episode 7', link: '/chapter1/episode7' },
              { text: 'Episode 8', link: '/chapter1/episode8' },
              { text: 'Episode 9', link: '/chapter1/episode9' },
              { text: 'Episode 10', link: '/chapter1/episode10' },
              { text: 'Episode 11', link: '/chapter1/episode11' },
              { text: 'Episode 12', link: '/chapter1/episode12' },
              { text: 'Episode 13', link: '/chapter1/episode13' },
              { text: 'Episode 14', link: '/chapter1/episode14' },
              { text: 'Episode 15', link: '/chapter1/episode15' },
              { text: 'Episode 16', link: '/chapter1/episode16' },
              { text: 'Episode 17', link: '/chapter1/episode17' },
              { text: 'Episode 18', link: '/chapter1/episode18' },
              { text: 'Episode 19', link: '/chapter1/episode19' },
              { text: 'Episode 20', link: '/chapter1/episode20' }
            ]
          },
          {
            text: 'Chapter 2',
            link: '/chapter2/',
            items: [
              { text: 'Episode 21', link: '/chapter2/episode21' },
              { text: 'Episode 22', link: '/chapter2/episode22' },
              { text: 'Episode 23', link: '/chapter2/episode23' },
              { text: 'Episode 24', link: '/chapter2/episode24' },
              { text: 'Episode 25', link: '/chapter2/episode25' },
              { text: 'Episode 26', link: '/chapter2/episode26' },
              { text: 'Episode 27', link: '/chapter2/episode27' },
              { text: 'Episode 28', link: '/chapter2/episode28' },
              { text: 'Episode 29', link: '/chapter2/episode29' },
              { text: 'Episode 30', link: '/chapter2/episode30' },
              { text: 'Episode 31', link: '/chapter2/episode31' },
              { text: 'Episode 32', link: '/chapter2/episode32' },
              { text: 'Episode 33', link: '/chapter2/episode33' },
              { text: 'Episode 34', link: '/chapter2/episode34' },
              { text: 'Episode 35', link: '/chapter2/episode35' },
              { text: 'Episode 36', link: '/chapter2/episode36' },
              { text: 'Episode 37', link: '/chapter2/episode37' },
              { text: 'Episode 38', link: '/chapter2/episode38' },
              { text: 'Episode 39', link: '/chapter2/episode39' },
              { text: 'Episode 40', link: '/chapter2/episode40' }
            ]
          },
          {
            text: 'Chapter 3',
            link: '/chapter3/',
            items: [
              { text: 'Episode 41', link: '/chapter3/episode41' },
              { text: 'Episode 42', link: '/chapter3/episode42' },
              { text: 'Episode 43', link: '/chapter3/episode43' },
              { text: 'Episode 44', link: '/chapter3/episode44' },
              { text: 'Episode 45', link: '/chapter3/episode45' },
              { text: 'Episode 46', link: '/chapter3/episode46' },
              { text: 'Episode 47', link: '/chapter3/episode47' },
              { text: 'Episode 48', link: '/chapter3/episode48' },
              { text: 'Episode 49', link: '/chapter3/episode49' },
              { text: 'Episode 50', link: '/chapter3/episode50' },
              { text: 'Episode 51', link: '/chapter3/episode51' },
              { text: 'Episode 52', link: '/chapter3/episode52' },
              { text: 'Episode 53', link: '/chapter3/episode53' },
              { text: 'Episode 54', link: '/chapter3/episode54' },
              { text: 'Episode 55', link: '/chapter3/episode55' },
              { text: 'Episode 56', link: '/chapter3/episode56' },
              { text: 'Episode 57', link: '/chapter3/episode57' },
              { text: 'Episode 58', link: '/chapter3/episode58' },
              { text: 'Episode 59', link: '/chapter3/episode59' },
              { text: 'Episode 60', link: '/chapter3/episode60' }
            ]
          },
          {
            text: 'Chapter 4',
            link: '/chapter4/',
            items: [
              { text: 'Episode 61', link: '/chapter4/episode61' },
              { text: 'Episode 62', link: '/chapter4/episode62' },
              { text: 'Episode 63', link: '/chapter4/episode63' },
              { text: 'Episode 64', link: '/chapter4/episode64' },
              { text: 'Episode 65', link: '/chapter4/episode65' },
              { text: 'Episode 66', link: '/chapter4/episode66' },
              { text: 'Episode 67', link: '/chapter4/episode67' },
              { text: 'Episode 68', link: '/chapter4/episode68' },
              { text: 'Episode 69', link: '/chapter4/episode69' },
              { text: 'Episode 70', link: '/chapter4/episode70' },
              { text: 'Episode 71', link: '/chapter4/episode71' },
              { text: 'Episode 72', link: '/chapter4/episode72' },
              { text: 'Episode 73', link: '/chapter4/episode73' },
              { text: 'Episode 74', link: '/chapter4/episode74' },
              { text: 'Episode 75', link: '/chapter4/episode75' },
              { text: 'Episode 76', link: '/chapter4/episode76' },
              { text: 'Episode 77', link: '/chapter4/episode77' },
              { text: 'Episode 78', link: '/chapter4/episode78' },
              { text: 'Episode 79', link: '/chapter4/episode79' },
              { text: 'Episode 80', link: '/chapter4/episode80' }
            ]
          },
          {
            text: 'Chapter 5',
            link: '/chapter5/',
            items: [
              { text: 'Episode 81', link: '/chapter5/episode81' },
              { text: 'Episode 82', link: '/chapter5/episode82' },
              { text: 'Episode 83', link: '/chapter5/episode83' },
              { text: 'Episode 84', link: '/chapter5/episode84' },
              { text: 'Episode 85', link: '/chapter5/episode85' },
              { text: 'Episode 86', link: '/chapter5/episode86' },
              { text: 'Episode 87', link: '/chapter5/episode87' },
              { text: 'Episode 88', link: '/chapter5/episode88' },
              { text: 'Episode 89', link: '/chapter5/episode89' },
              { text: 'Episode 90', link: '/chapter5/episode90' },
              { text: 'Episode 91', link: '/chapter5/episode91' },
              { text: 'Episode 92', link: '/chapter5/episode92' },
              { text: 'Episode 93', link: '/chapter5/episode93' },
              { text: 'Episode 94', link: '/chapter5/episode94' },
              { text: 'Episode 95', link: '/chapter5/episode95' },
              { text: 'Episode 96', link: '/chapter5/episode96' },
              { text: 'Episode 97', link: '/chapter5/episode97' },
              { text: 'Episode 98', link: '/chapter5/episode98' },
              { text: 'Episode 99', link: '/chapter5/episode99' },
              { text: 'Episode 100', link: '/chapter5/episode100' }
            ]
          },
        ]
      }
    ]
  }
] 