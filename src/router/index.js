import Vue from 'vue';
import Router from 'vue-router';
import component1 from '@/components/component1';
import component2 from '@/components/component2';
import component3 from '@/components/component3';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/props-demo',
      name: 'component1',
      component: component1,
    },
    {
      path: '/component2',
      name: 'component2',
      component: component2,
    },
    {
      path: '/component3',
      name: 'component3',
      component: component3,
    },
  ],
});
