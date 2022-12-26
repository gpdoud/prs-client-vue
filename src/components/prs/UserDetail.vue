<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PageTitle from '../PageHeader.vue';
import Menu from '../Menu.vue';
const route = useRoute();
const router = useRouter();

const pageTitle = "User Detail";
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
const showVerify = ref(false);
const toggleShowVerify = () => {
    showVerify.value = !showVerify.value;
}
const removeUser = async () => {
    const id = user.value.id;
    const res = await fetch(`${baseurl}/${id}`, { method: 'DELETE', mode: 'cors' });
    console.debug("Remove:", res);
    router.push(`/user/list`);
}
const navToChange = () => {
    const id = user.value.id;
    router.push(`/user/change/${id}`);
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
                    <td><input :value="user.id" disabled></td>
                </tr>
                <tr>
                    <td>Firstname</td>
                    <td><input :value="user.firstname" disabled></td>
                </tr>
                <tr>
                    <td>Lastname</td>
                    <td><input :value="user.lastname" disabled></td>
                </tr>
                <tr>
                    <td>Username</td>
                    <td><input :value="user.username" disabled></td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td><input :value="user.phone" disabled></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input :value="user.email" disabled></td>
                </tr>
                <tr>
                    <td>Reviewer</td>
                    <td><input type="checkbox" :checked="user.isReviewer" disabled></td>
                </tr>
                <tr>
                    <td>Admin</td>
                    <td><input type="checkbox" :checked="user.isAdmin" disabled></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <button @click="navToChange" class="btn btn-warning">Change</button> | 
                        <button @click="toggleShowVerify" class="btn btn-danger">Delete</button>
                        <span  v-if="showVerify">
                            | <button @click="removeUser" class="btn btn-danger">Verify Delete</button>
                        </span>
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