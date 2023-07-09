<template>
      <v-snackbar
      :timeout="2000"
      color="red-darken-2"
      rounded="pill"
      v-model="isVisible"
    >
      An error happended
  </v-snackbar>
</template>

<script lang="ts">
import { EVENTS } from '@/utils/eventBus';
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        modelValue: { type: Boolean, required: true }
    },
    emits: [EVENTS.OnModelChanged],
    computed: {
        isVisible: {
            get(): boolean {
                return this.modelValue
            },
            set(value: boolean): void {
                this.$emit(EVENTS.OnModelChanged, value)
            }
        }
    }
});
</script>