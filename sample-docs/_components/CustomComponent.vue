<script setup>
    defineProps(['title', 'lead', 'dataType'])
</script>

<template>
    <div class="section-header" :data-type="dataType">
        <h3><em>{{ lead }}</em> {{ title }}</h3>
    </div>
</template>