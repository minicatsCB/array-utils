<template>
  <q-page>
    <div class="q-pa-md row items-start q-gutter-md">
        <machine-card></machine-card>
        <machine-card></machine-card>
        <machine-card></machine-card>
    </div>
  </q-page>
</template>

<script>
import MachineCard from '../components/machine-card'

export default {
  name: 'machines',
  data () {
    return {}
  },
  components: {
    MachineCard
  }
}
</script>

<style>

</style>
