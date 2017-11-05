<template>
  <tr v-on:click="selectedLine">
    <td>{{ customer.name }}</td>
    <td>{{ customer.address }}</td>
    <td>2</td>
    <td><i class="green icon checkmark"></i> Done</td>
  </tr>
</template>

<script type='text/javascript'>
  export default {
    props: ['customer'],
    methods: {
      selectedLine() {
        console.log('selected line');
      },
    }
  }
</script>
