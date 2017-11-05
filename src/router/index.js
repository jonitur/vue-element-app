import Vue from 'vue';
import Router from 'vue-router';
import CustomerList from '@/components/CustomerList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CustomerList',
      component: CustomerList,
    },
  ],
});

window.addEventListener('load', (event) => {
  //const $jq1 = JQuery.noConflict();
  console.log('All resources finished loading!');
  console.log(event);
  //$('table').tablesort();
});
