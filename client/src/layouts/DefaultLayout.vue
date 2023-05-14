<template>
    <v-app>
        <v-toolbar class="">
            <v-spacer></v-spacer>
            <img alt="Vue logo" src="@/assets/logo.svg" class="app-logo" />
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']"></v-breadcrumbs>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script></script>

<style scoped>
.app-logo {
    height: 30px;
}
</style>

