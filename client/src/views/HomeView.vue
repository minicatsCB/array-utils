<script lang="ts">
import { defineComponent } from 'vue';
import MachineList from '../components/MachineList.vue'
import { filterIpv4Adresses } from "../utils/machineFilter"
import { EVENTS } from "../utils/eventBus"

export default defineComponent({
  components: {
    MachineList
  },
  data() {
        return {
            machines: []
        }
  },
  created: function () {
    this.loadData()
  },
  methods: {
    loadData() {
      this.$axios.get('http://localhost:3000/data')
        .then((response) => {
          console.log('Machines received sucessfully', response.data)
          this.machines = response.data
          this.machines.forEach(machine => filterIpv4Adresses(machine))
        })
        .catch((err) => {
          // TODO: adapt to use something different from Quasar
          /*                     this.$q.notify({
                                  color: 'negative',
                                  position: 'top',
                                  message: 'Loading failed' + err.toString(),
                                  icon: 'report_problem'
                              }) */
          this.$eventBus.emit(EVENTS.OnError);
        })
    }
  }
});
</script>

<template>
  <v-container>
    <v-row>
        <v-col cols="12">
          <v-progress-linear
          indeterminate
          color="green"
        ></v-progress-linear>
        </v-col>
    </v-row>
    <v-row>
      <v-col cols=12 sm=6>
        <h2 v-if="machines?.length > 0">
          <MachineList :machines="machines" />
        </h2>
        <h2 v-else>No machines to show</h2>
      </v-col>
      <v-col cols=12 sm=6 class="text-center">
          <p class="text-grey text-h4">Select a machine from the list to see its details</p>
          <img class="instructions-img" src="@/assets/computer.png">
      </v-col>
    </v-row>    
  </v-container>
</template>

<style scoped>
.instructions-img {
    width: 200px;
}
</style>