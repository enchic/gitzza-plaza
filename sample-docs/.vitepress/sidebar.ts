import gitzza from './data/gitzza-plaza.json'

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
              { text: 'Episode 2', link: '/chapter1/episode2' }
            ]
          },
          {
            text: 'Chapter 2',
            link: '/chapter2/',
            items: [
              { text: 'Episode 3', link: '/chapter2/episode3' },
              { text: 'Episode 4', link: '/chapter2/episode4' }
            ]
          },
          {
            text: 'Chapter 3',
            link: '/chapter3/',
            items: [
              { text: 'Episode 3', link: '/chapter3/episode5' }
            ]
          },
        ]
      }
    ]
  },
  {
    text: 'Story flow',
    link: '/story-flow/',
  },
  {
    text: 'Character flow',
    link: '/character-flow/',
    items: characterPages
  },
  {
    text: 'VitePress extensions',
    items: [
      { text: 'Templates', link: '/templates' }
    ],
  },
  {
    text: 'VitePress examples',
    items: [
      { text: 'Markdown Examples', link: '/markdown-examples' },
      { text: 'Runtime API Examples', link: '/api-examples' }
    ]
  }
] 