<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'info-tabs',
    data() {
        return {
            tab: 'os',
            machine: {}
        }
    },
    created: function () {
        let queryMachine = JSON.parse(this.$route.query.id)
        this.machine = queryMachine
        console.log('Details for machine with ID:', queryMachine.id)
    }
});
</script>

<template>
    <v-container>
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
            <v-tab :value="1">OS</v-tab>
            <v-tab :value="2">USER INFO</v-tab>
            <v-tab :value="3">ENV</v-tab>
            <v-tab :value="4">NETWORK INTERFACES</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item :key="1" :value="1">
                <v-container fluid>
                    <v-list lines="one">
                        <v-list-item v-for="(val, key) of machine.os" :key="key" :title="key"
                            :subtitle="val"></v-list-item>
                    </v-list>
                </v-container>
            </v-window-item>

            <v-window-item :key="2" :value="2">
                <v-container fluid>
                    <v-list lines="one">
                        <v-list-item v-for="(val, key) of machine.userInfo" :key="key" :title="key"
                            :subtitle="val"></v-list-item>
                    </v-list>
                </v-container>
            </v-window-item>

            <v-window-item :key="3" :value="3">
                <v-container fluid>
                    <v-list lines="one">
                        <v-list-item v-for="(val, key) of machine.env" :key="key" :title="key"
                            :subtitle="val"></v-list-item>
                    </v-list>
                </v-container>
            </v-window-item>

            <v-window-item :key="4" :value="4">
                <v-container fluid>
                    <v-list lines="one" v-for="(value, intfName) in machine.networkInterfaces">
                        <v-list-item v-for="(val, key) of machine.networkInterfaces[intfName]" :key="key"
                            :title="key" :subtitle="val"></v-list-item>
                    </v-list>
                </v-container>
            </v-window-item>
        </v-window>
    </v-container>
</template>