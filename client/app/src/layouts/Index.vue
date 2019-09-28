<template>
<q-layout view="hHh lpr fff">
  <q-header elevated class="bg-purple text-white" height-hint="98">
    <q-toolbar>
        <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
        </q-avatar>
      <q-toolbar-title>
        Title
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
