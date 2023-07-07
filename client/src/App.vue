<template>
  <app-toast v-model="isToastVisible"></app-toast>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppToast from './components/AppToast.vue'
import { EVENTS } from "./utils/eventBus"

export default defineComponent({
  components: {
    AppToast
  },
  data() {
    return {
      isToastVisible: false
    }
  },
  mounted() { 
    this.$eventBus.on(EVENTS.OnError, () => {
      this.isToastVisible = true;
    });
  }
});
</script>
