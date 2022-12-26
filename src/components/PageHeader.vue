<script setup>
const props = defineProps(
    { pageTitle: String, default: 'No Title' }
);
</script>

<template>
<div>
    <span id="page-title">{{ props.pageTitle }}</span>
</div>
</template>

<style scoped>
#page-title {
    font-size: 1.2em;
    font-weight: bold;
}
</style>