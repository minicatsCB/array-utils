<template>
<q-page>
  <div class="row instructions">
    <div class="col-6">
      <machine-card v-for="(machine, index) of machines" v-bind:key="index" @click.native="goToMachineDetails(machine)" v-bind:hostname="machine.os.hostname" v-bind:address="extractIpAddress(machine.networkInterfaces)">
      </machine-card>
    </div>
    <div class="col-6 self-center q-pa-xl">
      <p class="text-grey text-h4">Select a machine from the list to see its details</p>
      <img class="instructions-img" src="assets/computer.png">
    </div>
  </div>
</q-page>
</template>

<script>
import MachineCard from '../components/machineCard'

export default {
  name: 'machines',
  data () {
    return {
      machines: []
    }
  },
  created: function () {
    this.loadData()
  },
  methods: {
    goToMachineDetails: function (machine) {
      this.$router.push({
        path: 'infoTabs',
        query: {
          id: machine
        }
      })
    },
    extractIpAddress (intfs) {
      const disallowedIntf = 'lo'
      const filteredName = Object.keys(intfs).filter(key => !(key === disallowedIntf))[0]

      return intfs[filteredName].address
    },
    filterIpv4Adresses (machine) {
      let networkInterfaces = machine.networkInterfaces

      let filteredNetworkInterfaces = {}
      for (let intf in networkInterfaces) {
        for (let elem of networkInterfaces[intf]) {
          if (elem.family === 'IPv4') {
            filteredNetworkInterfaces[intf] = elem
          }
        }
      }

      machine.networkInterfaces = filteredNetworkInterfaces
    },
    loadData () {
      this.$axios.get('http://localhost:3000/data')
        .then((response) => {
          console.log('Machines received sucessfully', response.data)
          this.machines = response.data
          this.machines.forEach(machine => this.filterIpv4Adresses(machine))
        })
        .catch((err) => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed' + err.toString(),
            icon: 'report_problem'
          })
        })
    }
  },
  components: {
    MachineCard
  }
}
</script>

<style>
.instructions {
  text-align: center;
  height: calc(100vh - 52px);
}

.instructions-img {
  width: 200px;
}
</style>
