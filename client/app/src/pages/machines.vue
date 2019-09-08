<template>
  <q-page>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <q-icon name="warning" size="md" />
        </q-card-section>
        <q-card-section class="summary absolute-bottom text-right text-body2">
          <div>ubuntu1</div>
          <div>10.5.3.1</div>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <q-card-section>
          <q-icon name="warning" size="md" />
        </q-card-section>
        <q-card-section class="summary absolute-bottom text-right text-body2">
          <div>ubuntu1</div>
          <div>10.5.3.1</div>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <q-card-section>
          <q-icon name="warning" size="md" />
        </q-card-section>
        <q-card-section class="summary absolute-bottom text-right text-body2">
          <div>ubuntu1</div>
          <div>10.5.3.1</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'machines',
  data () {
    return {}
  }
}
</script>

<style>
.my-card {
  width: 100%;
  max-width: 150px;
  height: 150px;
  max-height: 150px;
}

.q-card .summary {
  padding-top: 16px;
  background-color: yellow;
}
</style>
