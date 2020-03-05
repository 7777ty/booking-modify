import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '@/views/NotFound.vue';
import Money from '@/views/Money.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Money
  },
    {
        path: '/notfound',
        component: NotFound
    },
];

const router = new VueRouter({
    routes
});

export default router;
