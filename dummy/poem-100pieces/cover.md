---
layout: doc
bookTitle: "Dummy Book:\n100 pieces of poetry\n100편의 더미 시집"
bookSubTitle: Lorem ipsum dolor sit, consectetur adipiscing elit.
author: Author
publisher: Noname Publisher
---

<link rel="stylesheet" type="text/css" href="./css/cover.css" />

::: face
  <div>
      <div style="background-image: url('./assets/images/cover.jpg');"></div>
      <div></div>
  </div>
  <div class="content">
      <h1 class="title">{{ $frontmatter.bookTitle.split('\\n').join('\n') }}</h1>
      <p>{{ $frontmatter.bookSubTitle }}</p>
      <p class="author">{{ $frontmatter.author }} 지음 <i class="publisher">{{ $frontmatter.publisher }}</i></p>
  </div>
:::


::: no-print
## Data

``` json-vue
{
  "bookTitle": "{{ $frontmatter.bookTitle.split('\n').join('\\n') }}",
  "bookSubTitle": "{{ $frontmatter.bookSubTitle }}",
  "author": "{{ $frontmatter.author }}",
  "publisher": "{{ $frontmatter.publisher }}"
}
```
:::