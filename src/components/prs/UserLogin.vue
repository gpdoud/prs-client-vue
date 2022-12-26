<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const username = ref('');
const password = ref('');
const message = ref('');
const baseurl = 'http://doudsystems.net/prsc37db/api/users';

const user = ref({});
const login = async () => {
    const url = `${baseurl}/${username.value}/${password.value}`;
    const res = await fetch(url);
    const user = await res.json();
    console.debug("User:", user);
    if(res.status == 200) {
        navToList();
    } else {
        message.value = "Username/Password not found!";
    }
}
const navToList = () => {
    router.push(`/user/list`);
}
</script>

<template>
<table class="table table-borderless">
    <tbody>
        <tr>
            <th>User name:</th>
            <td><input v-model="username"></td>
        </tr>
        <tr>
            <th>Password:</th>
            <td><input type="password" v-model="password"></td>
        </tr>
        <tr>
            <td colspan="2">
                <button @click="login" class="btn btn-primary">Login</button>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <label class="text-danger fw-bold">{{ message }}</label>
            </td>
        </tr>
    </tbody>
</table>
</template>

<style scoped>

</style>