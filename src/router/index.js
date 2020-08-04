import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import ListUsers from '../views/ListUsers.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/listusers',
    name: 'listusers',
    component: ListUsers,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
