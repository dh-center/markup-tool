import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: () => import(/* webpackChunkName: "editor" */ './views/Catalog.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import(/* webpackChunkName: "editor" */ './views/Editor.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('./views/SignUp.vue')
    }
  ]
});
