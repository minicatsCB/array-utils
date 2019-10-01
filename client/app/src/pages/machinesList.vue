<template>
<q-page>
  <div class="row instructions">
    <div class="col-6">
      <machine-card v-for="(machine, index) of formattedMachines" v-bind:key="index" @click.native="goToMachineDetails(machine)" v-bind:hostname="machine.os.hostname" v-bind:address="extractIpAddress(machine.networkInterfaces)">
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
      originalMachines: [],
      formattedMachines: []
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
    removeEmptyProperties (obj) {
      const newObj = {}
      Object.keys(obj).forEach(key => {
        if (obj[key]) {
          newObj[key] = obj[key]
        }
      })

      return newObj
    },
    formatMchineData (obj) {
      let formattedData = {
        os: {
          arch: '',
          hostname: '',
          platform: '',
          release: '',
          type: ''
        },
        userInfo: {},
        networkInterfaces: {},
        env: {}
      }

      for (let key in formattedData.os) {
        formattedData.os[key] = obj.os[key]
      }

      formattedData.userInfo = obj.os.userInfo

      let networkInterfaces = obj.os.networkInterfaces
      for (let intf in networkInterfaces) {
        for (let elem of networkInterfaces[intf]) {
          if (elem.family === 'IPv4') {
            formattedData.networkInterfaces[intf] = elem
          }
        }
      }

      formattedData.env = this.removeEmptyProperties(obj.env)

      return formattedData
    },
    extractIpAddress (intfs) {
      const disallowedIntf = 'lo'
      const filteredName = Object.keys(intfs).filter(key => !(key === disallowedIntf))[0]

      return intfs[filteredName].address
    },
    loadData () {
      this.$axios.get('http://localhost:3000/data')
        .then((response) => {
          this.originalMachines = response.data
          for (let machine of this.originalMachines) {
            this.formattedMachines.push(this.formatMchineData(machine))
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
