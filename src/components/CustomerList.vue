<template>
  <div>
    <table class="ui selectable basic table">
      <thead >
        <tr>
          <th>Customer</th>
          <th>Address</th>
          <th>Total</th>
          <th>Ordered</th>
        </tr>
      </thead>
      <tbody>
        <tr is='customer' v-for='customer in customers' :customer="customer"></tr>
      </tbody>
      <!--
      <tfoot>
        <tr><th colspan="4">
          <div class="ui right floated pagination menu">
            <a class="icon item">
              <i class="left chevron icon"></i>
            </a>
            <a class="item">1</a>
            <a class="item">2</a>
            <a class="item">3</a>
            <a class="item">4</a>
            <a class="icon item">
              <i class="right chevron icon"></i>
            </a>
          </div>
        </th>
      </tr></tfoot>-->
    </table>
    <!-- <customer v-for='customer in customers' v-bind:todo='customer'></customer> -->
  </div>

</template>

<script type='text/javascript'>

import Customer from './Customer';

export default {
  props: ['customers'],
  mounted: () => {
  },
  components: {
    Customer,
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
