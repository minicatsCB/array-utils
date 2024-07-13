<script setup lang="ts">
import { EVENTS } from '@/utils/constants';
import type { Machine, ResponseData } from '@/utils/models';
import { ref, onMounted, } from 'vue';
import ApiService from '@/services/ApiService';
import { useRoute } from 'vue-router';

const route = useRoute();
const tab = ref('os');
const machine = ref({} as Machine);
const emit = defineEmits([EVENTS.OnError]);

const loadData = async () => {
    const apiService = new ApiService();
    try {
        const response = await apiService.fetchData<ResponseData<Machine>>(`${import.meta.env.VITE_SERVER_HOST}/data/${route.params.id}`);
        machine.value = response.data;
    } catch (error) {
        emit(EVENTS.OnError);
    }
};

onMounted(loadData);
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
                    <v-list lines="one" v-for="iface in machine.networkInterfaces">
                            <v-list-item v-for="(val, key) in iface" :key="key"
                                :title="key" :subtitle="val?.toString()"></v-list-item>
                    </v-list>
                </v-container>
            </v-window-item>
        </v-window>
    </v-container>
</template>