<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PageTitle from '../PageHeader.vue';
import Menu from '../Menu.vue';
const route = useRoute();
const router = useRouter();

const pageTitle = "User Change";
const baseurl = 'http://doudsystems.net/prsc37db/api/users';

const user = ref({});
onBeforeMount(async () => {
    const id = route.params.id
    console.debug("Route id is", id);
    user.value = await getUser(id);
});
const getUser = async (id) => {
    const url = `${baseurl}/${id}`;
    const res = await fetch(url);
    const user = await res.json();
    console.debug("User:", user);
    return user;
}
const chgUser = async (user) => {
    const url = `${baseurl}`;
    const res = await fetch(`${url}/${user.id}`, {
        method: 'PUT',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    });
    console.debug("Chg:", res);
    if(res.status == 204) {
        console.log("Chg successful!");
    } else {
        console.error("Failed!", res);
    }
}
const save = async () => {
    console.debug("User b4 save", user.value);
    await chgUser(user.value);
    navToList();
}
const navToList = () => {
    router.push(`/user/list`);
}
</script>

<template>
    <header>

    </header>

    <Menu />
    <PageTitle :page-title=pageTitle />
    <RouterLink to="/user/list">Return to list</RouterLink>

    <main>
        <table class="table table-sm">
            <tbody>
                <tr>
                    <td>Id</td>
                    <td><input v-model="user.id" disabled ></td>
                </tr>
                <tr>
                    <td>Firstname</td>
                    <td><input v-model="user.firstname" ></td>
                </tr>
                <tr>
                    <td>Lastname</td>
                    <td><input v-model="user.lastname" ></td>
                </tr>
                <tr>
                    <td>Username</td>
                    <td><input v-model="user.username" ></td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td><input v-model="user.phone" ></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input v-model="user.email" ></td>
                </tr>
                <tr>
                    <td>Reviewer</td>
                    <td><input type="checkbox" v-model="user.isReviewer" ></td>
                </tr>
                <tr>
                    <td>Admin</td>
                    <td><input type="checkbox" v-model="user.isAdmin" ></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <td colspan="2">
                        <button @click="save" class="btn btn-primary">Save</button>
                    </td>
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