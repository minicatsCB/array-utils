<template>
    <v-app>
        <app-toast v-model="isToastVisible"></app-toast>
        <v-breadcrumbs :items="[`${$route.path}`]"></v-breadcrumbs>

        <v-main>
            <router-view @on-error="handleError" />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import AppToast from '@/components/AppToast.vue';
import { ref } from 'vue';

const isToastVisible = ref(false);

function handleError() {
    isToastVisible.value = true;
}
</script>

<style scoped>
.app-logo {
    height: 30px;
}
</style>

