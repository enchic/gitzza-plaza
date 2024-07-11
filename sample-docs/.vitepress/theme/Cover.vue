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
[class*="box"] {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    min-height: 700px;
    color: #fff;
    font-weight: bold;
    font-size: 2em;
}

.face {
    position: relative;
    max-width: 688px;
    margin: 0 auto;
    background-color: #1a1112;
}

.face > div {
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

.face .title {
    position: relative;
    color: #fff;
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
    [class*="box"] {
        height: 100vh;
    }
    .face {
        max-width: none;
    }
    .face > div {
        bottom: 3cm;
    }
}
</style>