import gitzza from './data/scripts.json'

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
            text: 'Scene 1',
            link: '/scene1/',
            items: [
              { text: 'Episode 1', link: '/scene1/episode1' },
              { text: 'Episode 2', link: '/scene1/episode2' },
              { text: 'Episode 3', link: '/scene1/episode3' }
            ]
          },
          {
            text: 'Scene 2',
            link: '/scene2/',
            items: [
              { text: 'Episode 4', link: '/scene2/episode4' },
              { text: 'Episode 5', link: '/scene2/episode5' },
              { text: 'Episode 6', link: '/scene2/episode6' }
            ]
          },
          {
            text: 'Scene 3',
            link: '/scene3/',
            items: [
              { text: 'Episode 7', link: '/scene3/episode7' },
              { text: 'Episode 8', link: '/scene3/episode8' },
              { text: 'Episode 9', link: '/scene3/episode9' }
            ]
          },
          {
            text: 'Scene 4',
            link: '/scene4/',
            items: [
              { text: 'Episode 10', link: '/scene4/episode10' },
              { text: 'Episode 11', link: '/scene4/episode11' },
              { text: 'Episode 12', link: '/scene4/episode12' }
            ]
          },
          {
            text: 'Scene 5',
            link: '/scene5/',
            items: [
              { text: 'Episode 13', link: '/scene5/episode13' },
              { text: 'Episode 14', link: '/scene5/episode14' },
              { text: 'Episode 15', link: '/scene5/episode15' }
            ]
          },
          {
            text: 'Scene 6',
            link: '/scene6/',
            items: [
              { text: 'Episode 16', link: '/scene6/episode16' },
              { text: 'Episode 17', link: '/scene6/episode17' },
              { text: 'Episode 18', link: '/scene6/episode18' }
            ]
          },
          {
            text: 'Scene 7',
            link: '/scene7/',
            items: [
              { text: 'Episode 19', link: '/scene7/episode19' },
              { text: 'Episode 20', link: '/scene7/episode20' },
              { text: 'Episode 21', link: '/scene7/episode21' }
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
  }
] 