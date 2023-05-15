<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'machine-card',
    props: {
        hostname: String,
        address: String
    }
});
</script>

<template>
    <v-card
      :title="hostname"
      :subtitle="address"
      prepend-icon="mdi-laptop"
    ></v-card>
</template>

<style lang="postcss">
.v-card {
  border: 1px solid lime;
}
</style>

