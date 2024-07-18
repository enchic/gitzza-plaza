---
layout: doc
bookTitle: 글을 Git자
bookSubTitle: 마크다운 언어로 글쓰기
author: 공인식
publisher: 무명출판사
---

<link rel="stylesheet" type="text/css" href="./css/cover.css" />

::: face
  <div>
      <div style="background-image: url('./assets/images/cover.jpg');"></div>
      <div></div>
  </div>
  <div class="content">
      <h1 class="title">{{ $frontmatter.bookTitle }}</h1>
      <p>{{ $frontmatter.bookSubTitle }}</p>
      <p class="author">{{ $frontmatter.author }} 지음 <i class="publisher">{{ $frontmatter.publisher }}</i></p>
  </div>
:::


::: no-print
## Data

``` json-vue
{
  "bookTitle": "{{ $frontmatter.bookTitle }}",
  "bookSubTitle": "{{ $frontmatter.bookSubTitle }}",
  "author": "{{ $frontmatter.author }}",
  "publisher": "{{ $frontmatter.publisher }}"
}
```
:::