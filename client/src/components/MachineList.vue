<script lang="ts">
import { defineComponent } from 'vue';
import MachineCard from './MachineCard.vue';
import { extractIpAddress } from "../utils/machineFilter"
import type { Machine, NetworkInterfacesDetails } from '@/utils/models';

export default defineComponent({
    name: 'machines',
    components: {
        MachineCard
    },
    props: {
        machines: { type: Array<Machine>, required: true }
    },
    methods: {
        goToMachineDetails: function (machineId: string): void {
            this.$router.push({
                name: "Details",
                params: {
                    id: machineId
                }
            })
        },
        getAddress: function(intfs: NetworkInterfacesDetails): string {
            return extractIpAddress(intfs);
        }
    }
});
</script>

<template>
    <v-container>
        <machine-card v-for="(machine, index) of machines" v-bind:key="index"
            @click.native="goToMachineDetails(machine.id)" v-bind:hostname="machine.os.hostname"
            v-bind:address="getAddress(machine.networkInterfaces)">
        </machine-card>
    </v-container>
</template>