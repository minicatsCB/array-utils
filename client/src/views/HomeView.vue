<script setup lang="ts">
import { defineEmits, onMounted, ref } from 'vue';
import MachineList from '../components/MachineList.vue';
import { EVENTS } from "../utils/eventBus";
import type { Machine, ResponseData } from '@/utils/models';
import ApiService from '@/services/ApiService';

const emit = defineEmits([EVENTS.OnError]);

const machines = ref<Array<Machine>>([]);

const loadData = async () => {
  const apiService = new ApiService();
  try {
    const { data } = await apiService.fetchData<ResponseData<Array<Machine>>>(import.meta.env.VITE_SERVER_HOST + "/data")
    machines.value = data;
  } catch (error) {
    emit(EVENTS.OnError);
  }
};

onMounted(() => {
  loadData();
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