<template>
    <q-card class="my-card">
      <q-card-section>
        <q-icon name="warning" size="md" />
      </q-card-section>
      <q-card-section class="summary absolute-bottom text-right text-body2">
        <div>ubuntu1</div>
        <div>10.5.3.1</div>
      </q-card-section>
    </q-card>
</template>

<script>
export default {
  name: 'machine-card'
}
</script>

<style>
.my-card {
  width: 100%;
  max-width: 150px;
  height: 150px;
  max-height: 150px;
  display: inline-block;
}

.q-card .summary {
  padding-top: 16px;
  background-color: yellow;
}
</style>
