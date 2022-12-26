<script setup>
import { onBeforeMount, ref } from 'vue';
import { RouterLink } from 'vue-router'
//import './Userservice'

import Menu from '../Menu.vue';
import PageTitle from '../PageHeader.vue';
const pageTitle = "User List";
const url = 'http://doudsystems.net/prsc37db/api/users';
const users = ref([]);

onBeforeMount(async () => {
    users.value = await getUsers();
});

const getUsers = async () => {
    const res = await fetch(url);
    const users = await res.json();
    console.debug("Users:", users);
    return users;
}

</script>

<template>
    <header>

    </header>

    <Menu />
    <PageTitle :page-title=pageTitle />
    <RouterLink to="/user/create">Create New</RouterLink>

    <main>
        <table class="table table-sm">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Reviewer?</th>
                    <th>Admin?</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="u in users">
                    <td>{{ u.id }}</td>
                    <td>{{ u.firstname + ' ' + u.lastname }}</td>
                    <td>{{ u.username }}</td>
                    <td>{{ u.phone }}</td>
                    <td>{{ u.email }}</td>
                    <td>{{ u.isReviewer ? "Y" : "N" }}</td>
                    <td>{{ u.isAdmin ? "Y" : "N" }}</td>
                    <td>
                        <RouterLink :to="`/user/detail/${u.id}`">Det</RouterLink> |
                        <RouterLink :to="`/user/change/${u.id}`">Chg</RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>

    <footer>
        
    </footer>
</template>

<style scoped>
h1 {
    color: blue;
}
</style>