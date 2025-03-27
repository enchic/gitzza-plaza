<script setup>
    defineProps(['title', 'lead', 'dataType'])
</script>

<template>
    <div class="section-header" :data-type="dataType">
        <h3><em v-if="lead !== 'null'">{{ lead }}</em> <slot></slot> {{ title }}</h3>
    </div>
</template>