<script setup>
import { RouterLink } from 'vue-router'

const menus = [
    { display: 'Home', route: '/' },
    { display: 'User', route: '/user/list' },
    { display: 'About', route: '/about' },
    { display: 'Login', route: '/login' }
];
</script>

<template>
  <nav>
    <ul>
      <li v-for="m in menus">
        <RouterLink :to=m.route>{{ m.display }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #454545;
}
ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
li {
  display: inline-block;
}
a {
  padding: 0 10px;
  color: silver;
  text-decoration: none;
}
a:hover {
  background-color: black;
  color: white;
}
</style>