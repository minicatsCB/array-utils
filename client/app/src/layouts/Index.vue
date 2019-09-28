<template>
<q-layout view="hHh lpr fff">
  <q-header elevated class="bg-purple text-white" height-hint="98">
    <q-toolbar>
      <q-toolbar-title class="text-center text-uppercase text-h3 q-pa-xs">
        Hacker's dashboard
      </q-toolbar-title>
    </q-toolbar>
  </q-header>

  <q-page-container class="bg-black">
    <router-view />
  </q-page-container>

</q-layout>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
</style>
