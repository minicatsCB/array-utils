<template>
  <div class="hello">
    <li v-for="(machine, index) in machinesData" v-bind:key="index">
        {{ machine }}
    </li>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService";
export default {
  name: 'HelloWorld',
  data() {
      return {
          machinesData: null
      }
    },
    mounted() {
      ApiService.getMachinesData().then(res => this.machinesData = res.data);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
