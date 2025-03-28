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
              { text: 'Shot 1', link: '/scene1/shot1' },
              { text: 'Shot 2', link: '/scene1/shot2' },
              { text: 'Shot 3', link: '/scene1/shot3' }
            ]
          },
          {
            text: 'Scene 2',
            link: '/scene2/',
            items: [
              { text: 'Shot 4', link: '/scene2/shot4' },
              { text: 'Shot 5', link: '/scene2/shot5' },
              { text: 'Shot 6', link: '/scene2/shot6' }
            ]
          },
          {
            text: 'Scene 3',
            link: '/scene3/',
            items: [
              { text: 'Shot 7', link: '/scene3/shot7' },
              { text: 'Shot 8', link: '/scene3/shot8' },
              { text: 'Shot 9', link: '/scene3/shot9' }
            ]
          },
          {
            text: 'Scene 4',
            link: '/scene4/',
            items: [
              { text: 'Shot 10', link: '/scene4/shot10' },
              { text: 'Shot 11', link: '/scene4/shot11' },
              { text: 'Shot 12', link: '/scene4/shot12' }
            ]
          },
          {
            text: 'Scene 5',
            link: '/scene5/',
            items: [
              { text: 'Shot 13', link: '/scene5/shot13' },
              { text: 'Shot 14', link: '/scene5/shot14' },
              { text: 'Shot 15', link: '/scene5/shot15' }
            ]
          },
          {
            text: 'Scene 6',
            link: '/scene6/',
            items: [
              { text: 'Shot 16', link: '/scene6/shot16' },
              { text: 'Shot 17', link: '/scene6/shot17' },
              { text: 'Shot 18', link: '/scene6/shot18' }
            ]
          },
          {
            text: 'Scene 7',
            link: '/scene7/',
            items: [
              { text: 'Shot 19', link: '/scene7/shot19' },
              { text: 'Shot 20', link: '/scene7/shot20' },
              { text: 'Shot 21', link: '/scene7/shot21' }
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