<script setup>
import Menu from './Menu.vue';
import PageTitle from './PageHeader.vue';
const pageTitle = "Home";

</script>

<template>
  <header>

  </header>
  
  <Menu />
  <PageTitle :page-title=pageTitle />

  <main>
    <h1>Home works!</h1>
  </main>

  <footer>
    
  </footer>
</template>

<style scoped>
</style>
