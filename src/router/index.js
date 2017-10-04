import Vue from 'vue';
import Router from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

import Hello from '@/components/Hello';
import AddProduct from '@/components/AddProduct';
import ProductList from '@/components/ProductList';
import navbar from '@/components/navbar';

Vue.use(Router);
Vue.use(BootstrapVue);
Vue.component('navbar', navbar)

const EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
});

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/add',
      name: 'AddProduct',
      component: AddProduct
    }
  ]
})
