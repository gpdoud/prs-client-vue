<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PageTitle from '../PageHeader.vue';
import Menu from '../Menu.vue';
const route = useRoute();
const router = useRouter();

const pageTitle = "User Create";
const baseurl = 'http://doudsystems.net/prsc37db/api/users';

const user = ref({
    id: 0, username: '', password: '', firstname: '', lastname: '',
    phone: '', email: '', isReviewer: false, isAdmin: false
});
onBeforeMount(async () => {
});
const addUser = async (user) => {
    const url = `${baseurl}`;
    const res = await fetch(`${url}`, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    });
    console.debug("Add:", res);
    if(res.status == 201) {
        console.log("Add successful!");
    } else {
        console.error("Failed!", res);
    }
    return user;
}
const save = async () => {
    console.debug("User b4 save", user.value);
    const addedUser = await addUser(user.value);
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
                    <td><input type="number" v-model="user.id" disabled ></td>
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
                    <td>Password</td>
                    <td><input type="password" v-model="user.password" ></td>
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
                        <button @click="save" class="btn btn-primary">Save</button>
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