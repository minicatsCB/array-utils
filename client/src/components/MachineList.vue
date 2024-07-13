<script setup lang="ts">
import MachineCard from './MachineCard.vue';
import type { Machine, NetworkDetails } from '@/utils/models';
import { useRouter } from 'vue-router';

const props = defineProps<{ machines: Array<Machine>; }>();
const router = useRouter();

function goToMachineDetails(machineId: string): void {
    router.push({
        name: "Details",
        params: {
            id: machineId
        }
    })
}


function isEthernet({ ifaceName }: { ifaceName: string }): boolean {
    return ifaceName.toLowerCase().includes('ethernet');
}

function extractIpAddress(ifaces: Array<NetworkDetails>): string {
    const foundIface = ifaces.find(isEthernet);
    return foundIface ? foundIface.address : 'x.y.z.w';
}
</script>

<style lang="postcss">
.machine {
    margin-bottom: 16px;
}
</style>

<template>
    <v-container>
        <machine-card class="machine" v-for="(machine, index) of props.machines" v-bind:key="index"
            @click.native="goToMachineDetails(machine.id)" v-bind:hostname="machine.os.hostname"
            v-bind:address="extractIpAddress(machine.networkInterfaces)">
        </machine-card>
    </v-container>
</template>