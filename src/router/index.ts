import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '@/views/NotFound.vue';
import Money from '@/views/Money.vue';
import General from '@/views/General.vue';
import Chart from '@/views/Chart.vue';
import EditRecord from '@/views/EditRecord.vue';


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
      path:'/general',
      component: General
    },
  {
    path: '/chart',
    component: Chart
  },
  {
    path: '/general/edit/:id',
    component: EditRecord
  },
    {
        path: '*',
        component: NotFound
    },
];

const router = new VueRouter({
    routes
});

export default router;
