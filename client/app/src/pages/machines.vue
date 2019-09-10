<template>
  <q-page>
    <div class="row q-pa-md">
        <div class="col-6">
            <machine-card
                v-for="(machine, index) in machines"
                v-bind:key="index"
                @click.native="goToMachineDetails"
            >
            </machine-card>
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
    return {
      machines: [
        {
          id: '000',
          hostname: 'ubuntu1',
          address: '10.5.3.1'
        },
        {
          id: '001',
          hostname: 'ubuntu4',
          address: '10.5.3.5'
        },
        {
          id: '002',
          hostname: 'ubuntu2',
          address: '10.5.3.6'
        }
      ]
    }
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
