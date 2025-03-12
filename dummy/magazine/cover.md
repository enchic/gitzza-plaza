---
layout: doc
bookTitle: "Lorem Ipsum"
bookSubTitle: "Lorem ipsum dolor sit,\nconsectetur adipiscing elit."
author: Author
publisher: Noname Publisher
---

<script setup>
  import { createApp } from 'vue';
  import VueBarcode from '@chenfengyuan/vue-barcode';

  const barcodeOptions = {
    displayValue: true,
    format: 'EAN13',
    width: 1.4,
    height: 34,
  };
</script>


<link rel="stylesheet" type="text/css" href="./css/cover.css" />

::: face
  <!-- <div>
      <div style="background-image: url('./assets/images/cover.jpg');"></div>
      <div></div>
  </div> -->
  <div class="content" style="display: flex; flex-direction: column;">
      <h1 class="title">{{ $frontmatter.bookTitle.split('\\n').join('\n') }}</h1>
      <p style="order: 3; position: relative; z-index: 1; line-height: 1; text-align: center; text-shadow: 1px 1px 5px #000; white-space: pre-line;">{{ $frontmatter.bookSubTitle.split('\\n').join('\n') }}</p>
      <div style="position: absolute; top: 8%; left: 50%; width: 48%; margin-left: -67%;"><img src="/assets/images/pixabay_rose-png-6088936_1920.png" alt="" style="width: 100%; height: auto;" /></div>
      <div style="position: relative; z-index: 3; display: flex; justify-content: space-between; margin-top: 30%;">
        <div style="font-size: 0.875rem;">
          <p style="line-height: 1.2;">
            Maecenas vitae metus sit amet<br />
            Lorem vitae metus sit<br />
            Amet lorem tristique hendrerit id
          </p>
          <p style="line-height: 1.2;">
            Vitae metus sit amet lorem<br />
            <span style="display: inline-block; margin: 0 -0.25rem; padding: 0 0.25rem; background-color: yellow; color: #000;">Hendrerit id</span><br />
            <span style="display: inline-block; margin: 0 -0.25rem; padding: 0 0.25rem; background-color: yellow; color: #000;">Hendrerit id at erat</span><br />
            Purus dapibus, sed
          </p>
          <p style="line-height: 1.2;">
            Vitae metus sit amet lorem<br />
            Hendrerit id<br />
            Hendrerit id at erat<br />
            Purus dapibus, sed
          </p>
          <p style="line-height: 1.2;">
            Vitae metus sit amet lorem<br />
            Hendrerit id<br />
            Hendrerit id at erat<br />
            Purus dapibus, sed
          </p>
          <p style="line-height: 1.2;">
            <span style="display: inline-block; margin: 0 -0.25rem; padding: 0 0.25rem; background-color: yellow; color: #000;">Maecenas vitae metus sit amet</span><br />
            Lorem vitae metus sit<br />
            Amet lorem tristique hendrerit id
          </p>
        </div>
        <div style="font-size: 0.875rem; text-align: right;">
          <p style="line-height: 1.2;">
            Vitae metus sit amet lorem<br />
            Hendrerit id<br />
            Hendrerit id at erat<br />
            Purus dapibus, sed
          </p>
          <p style="line-height: 1.2;">
            Vitae metus sit amet lorem<br />
            Hendrerit id<br />
            <span style="display: inline-block; margin: 0 -0.25rem; padding: 0 0.25rem; background-color: red; color: #000;">Hendrerit id at erat</span><br />
            <span style="display: inline-block; margin: 0 -0.25rem; padding: 0 0.25rem; background-color: red; color: #000;">Purus dapibus, sed</span>
          </p>
        </div>
      </div>
      <p class="author" style="order: 4;">{{ $frontmatter.author }} <i class="publisher">{{ $frontmatter.publisher }}</i></p>
      <div class="barcode"><vue-barcode value="123456789012" :options="barcodeOptions" tag="svg"></vue-barcode></div>
  </div>
:::


::: no-print
## Data

``` json-vue
{
  "bookTitle": "{{ $frontmatter.bookTitle.split('\n').join('\\n') }}",
  "bookSubTitle": "{{ $frontmatter.bookSubTitle.split('\n').join('\\n') }}",
  "author": "{{ $frontmatter.author }}",
  "publisher": "{{ $frontmatter.publisher }}"
}
```
:::