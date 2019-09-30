<template>
  <q-page>
    <div class="row instructions">
        <div class="col-6">
            <machine-card
                v-for="(machine, index) in machines"
                v-bind:key="index"
                @click.native="goToMachineDetails(machine)"
                v-bind:hostname="machine.hostname"
                v-bind:address="machine.address"
            >
            </machine-card>
        </div>
        <div class="col-6 self-center q-pa-xl">
            <p class="text-grey text-h4">Select a machine from the list to see its details</p>
            <img class="instructions-img" src="https://cdn.quasar.dev/img/mountains.jpg">
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
      this.$router.push({ path: 'infoTabs', query: { id: machine } })
    },
    loadData () {
      this.$axios.get('http://localhost:3000/data')
        .then((response) => {
          for (let machine of response.data) {
            this.machines.push({
              id: machine.id,
              hostname: machine.os.hostname,
              address: machine.os.networkInterfaces.enp0s3[0].address,
              data: machine
            })
          }
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
