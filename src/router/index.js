import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import UserList from '../components/prs/UserList.vue';
import UserDetail from '../components/prs/UserDetail.vue';
import UserCreate from '../components/prs/UserCreate.vue';
import UserChange from '../components/prs/UserChange.vue';
import Login from '../components/prs/UserLogin.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                name: 'home',       component: Home },
    { path: '/login',           name: 'login',      component: Login },
    { path: '/user/list',       name: 'UserList',   component: UserList },
    { path: '/user/detail/:id', name: 'UserDetail', component: UserDetail, params: true },
    { path: '/user/create',     name: 'UserCreate', component: UserCreate },
    { path: '/user/change/:id', name: 'UserChange', component: UserChange, params: true },
    { path: '/about',           name: 'about',      component: About }
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
