// import gitzza from './data/novel-7chapters.json'

// 등장인물별 페이지 생성
/* const characterPages = Object.entries(gitzza.Characters).map(([name, fullName]) => ({
  text: name,
  link: `/character-flow/${name}`
})) */

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
              { text: 'Episode 3', link: '/chapter1/episode3' }
            ]
          },
          {
            text: 'Chapter 2',
            link: '/chapter2/',
            items: [
              { text: 'Episode 4', link: '/chapter2/episode4' },
              { text: 'Episode 5', link: '/chapter2/episode5' },
              { text: 'Episode 6', link: '/chapter2/episode6' }
            ]
          },
          {
            text: 'Chapter 3',
            link: '/chapter3/',
            items: [
              { text: 'Episode 7', link: '/chapter3/episode7' },
              { text: 'Episode 8', link: '/chapter3/episode8' },
              { text: 'Episode 9', link: '/chapter3/episode9' }
            ]
          },
          {
            text: 'Chapter 4',
            link: '/chapter4/',
            items: [
              { text: 'Episode 10', link: '/chapter4/episode10' },
              { text: 'Episode 11', link: '/chapter4/episode11' },
              { text: 'Episode 12', link: '/chapter4/episode12' }
            ]
          },
          {
            text: 'Chapter 5',
            link: '/chapter5/',
            items: [
              { text: 'Episode 13', link: '/chapter5/episode13' },
              { text: 'Episode 14', link: '/chapter5/episode14' },
              { text: 'Episode 15', link: '/chapter5/episode15' }
            ]
          },
        ]
      }
    ]
  }
] 