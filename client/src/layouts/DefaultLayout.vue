<template>
    <v-app>
        <v-toolbar class="">
            <v-spacer></v-spacer>
            <img alt="Vue logo" src="@/assets/logo.svg" class="app-logo" />
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-breadcrumbs :items="[`${$route.path}`]"></v-breadcrumbs>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
.app-logo {
    height: 30px;
}
</style>

