<script lang="ts">
import { defineComponent } from 'vue';
import MachineList from '../components/MachineList.vue'

export default defineComponent({
  components: {
    MachineList
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
        <div class="col-6 self-center q-pa-xl">
          <p class="text-grey text-h4">Select a machine from the list to see its details</p>
          <img class="instructions-img" src="@/assets/computer.png">
        </div>
      </v-col>
      <v-col cols=12 sm=6>
        Máquinas
        <MachineList />
      </v-col>
    </v-row>    
  </v-container>
</template>