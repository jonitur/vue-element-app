<template>
  <div>
    <el-table
        :data="customers"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="Date"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="Name"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="Address">
        </el-table-column>
      </el-table>

      <!-- <customer v-for='customer in customers' v-bind:todo='customer'></customer> -->
  </div>

</template>

<script type='text/javascript'>

export default {
  props: ['customers'],
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
