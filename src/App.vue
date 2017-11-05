<template>
  <div id="app">
    <img src="./assets/logo.png">
    <customer-list v-bind:customers="customers"></customer-list>
    <!--<router-view/>-->
  </div>
</template>

<script>

import CustomerList from './components/CustomerList';

export default {
  name: 'app',
  components: {
    CustomerList,
  },
  data() {
    return {
      customers: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      }, {
        date: '2016-05-02',
        name: 'Jack',
        address: 'No. 189, Grove St, Los Angeles',
      }, {
        date: '2016-05-04',
        name: 'Jill',
        address: 'No. 187, Grove St, Los Angeles',
      }, {
        date: '2016-05-01',
        name: 'Harry',
        address: 'No. 189, Grove St, Los Angeles',
      }],
    };
  },
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
