<script lang="ts">
import { defineComponent } from 'vue';
import MachineList from '../components/MachineList.vue'

export default defineComponent({
  components: {
    MachineList
  },
  data () {
    return {}
  }
});
</script>

<template>
  <main class="bg-black" view="hHh lpr fff">
    <div reveal class="bg-black header"> <!-- q-header -->
      <div> <!-- q-toolbar -->
        <h1 class="text-right text-uppercase text-h6 q-pa-xs fade-in-left"> <!-- q-toolbar-title -->
          Hacker's dashboard
        </h1>
      </div>
      <div class="flicker" indeterminate color="lime" size="xs"/> <!-- q-linear-progress -->
    </div>
    <MachineList />  
  </main>
  </template>

<style>
@keyframes flickerAnimation {
  0%   { opacity:1; }
  40%, 90%  { opacity:0; }
  100% { opacity:1; }
}

@keyframes fadeIn {
  from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.flicker {
    animation: flickerAnimation 5s infinite;
}

.fade-in-left {
  animation: fadeIn 1s;
}

.header {
    height: 52px;
}
</style>