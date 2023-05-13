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
    <q-card class="my-card q-ma-md">
        <q-card-section>
            <q-icon name="computer" color="lime" size="md" />
        </q-card-section>
        <q-card-section class="summary absolute-bottom text-right text-body2">
            <div>{{ hostname }}</div>
            <div>{{ address }}</div>
        </q-card-section>
    </q-card>
</template>

<style lang="postcss">
.q-card {
  width: 100%;
  max-width: 150px;
  height: 150px;
  max-height: 150px;
  display: inline-block;
  border: 1px solid $lime;
  background-color: transparent;
}

.q-card .summary {
  padding-top: 16px;
  color: $lime;
}
</style>

