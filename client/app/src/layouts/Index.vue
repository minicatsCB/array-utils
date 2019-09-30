<template>
<q-layout class="bg-black" view="hHh lpr fff">
  <q-header reveal class="bg-black header">
    <q-toolbar>
      <q-toolbar-title class="text-right text-uppercase text-h6 q-pa-xs fade-in-left">
        Hacker's dashboard
      </q-toolbar-title>
    </q-toolbar>
    <q-linear-progress class="flicker" indeterminate color="lime" size="xs"/>
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
