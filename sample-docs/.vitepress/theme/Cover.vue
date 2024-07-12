<script setup>
    import { useData } from 'vitepress'
    const { page, frontmatter } = useData()
</script>

<template>
    <div v-if="page.isNotFound">
        Custom 404 page!
    </div>
    <div v-if="frontmatter.layout === 'home'">
        Custom home page!
    </div>
    <Content v-else />
</template>

<style>
[class*="box"].face {
    display: flex;
    flex-direction: column;
    width: auto;
    color: #fff;
    font-weight: bold;
    font-size: 2em;
    line-height: 1.4;
}
#app [class*="box"].face {
    height: auto;
    min-height: 800px;
}

.face {
    position: relative;
    max-width: 688px;
    margin: 0 auto;
    background-color: #1a1112;
}

.face > div:not(.content) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: 56.25%;
}

.face > div > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: no-repeat left top;
    background-size: cover;
}
.face > div > div img {
    width: 100%;
    height: auto;
    vertical-align: top;
}

.face .title {
    position: relative;
    flex: 0 0 auto;
    color: #fff;
    line-height: inherit;
}

.section {
    padding: 1cm;
}

.section {
    page-break-after: always;
}

.section > h1 {
    margin-top: 0;
}

@media print {
    .VPNav,
    .VPLocalNav {
        display: none !important;
    }
    #app [class*="box"] {
        height: 100vh;
        min-height: 0;
    }
    .face {
        max-width: none;
    }
    .face > div {
        bottom: 3cm;
    }
}
</style>