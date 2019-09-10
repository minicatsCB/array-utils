<template>
  <q-page>
    <div class="row q-pa-md">
        <div class="col-6">
            <machine-card @click.native="goToMachineDetails"></machine-card>
            <machine-card @click.native="goToMachineDetails"></machine-card>
            <machine-card @click.native="goToMachineDetails"></machine-card>
        </div>
        <div class="col-6">
            <p>Select a machine from the list to see its details</p>
            <img class="instructions-img" src="https://cdn.quasar.dev/img/mountains.jpg">
        </div>
    </div>
  </q-page>
</template>

<script>
import MachineCard from '../components/machine-card'

export default {
  name: 'machines',
  data () {
    return {}
  },
  methods: {
    goToMachineDetails: function () {
      this.$router.push({ path: 'machine-details' })
    }
  },
  components: {
    MachineCard
  }
}
</script>

<style>
.instructions-img {
    width: 200px;
}
</style>
