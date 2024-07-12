<template>
    <v-app>
        <app-toast v-model="isToastVisible"></app-toast>
        <v-toolbar class="">
            <v-spacer></v-spacer>
            <img alt="Vue logo" src="@/assets/logo.svg" class="app-logo" />
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-breadcrumbs :items="[`${$route.path}`]"></v-breadcrumbs>

        <v-main>
            <router-view @on-error="handleError" />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppToast from '@/components/AppToast.vue';

export default defineComponent({
    name: 'DefaultLayout',
    components: {
        AppToast
    },
    data() {
        return {
            isToastVisible: false
        }
    },
    methods: {
        handleError() {
            this.isToastVisible = true;
        }
    }
});
</script>

<style scoped>
.app-logo {
    height: 30px;
}
</style>

