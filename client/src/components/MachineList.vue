<script lang="ts">
import { defineComponent } from 'vue';
import MachineCard from './MachineCard.vue';
import type { Machine, NetworkDetails } from '@/utils/models';

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
        isEthernet: function ({ ifaceName } : { ifaceName: string}): boolean {
            return ifaceName.toLowerCase().includes('ethernet');
        },
        extractIpAddress: function(ifaces: Array<NetworkDetails>): string {
            const foundIface = ifaces.find(this.isEthernet);
            return foundIface ? foundIface.address : 'x.y.z.w';
        }
    }
});
</script>

<style lang="postcss">
.machine {
    margin-bottom: 16px;
}
</style>

<template>
    <v-container>
        <machine-card class="machine" v-for="(machine, index) of machines" v-bind:key="index"
            @click.native="goToMachineDetails(machine.id)" v-bind:hostname="machine.os.hostname"
            v-bind:address="extractIpAddress(machine.networkInterfaces)">
        </machine-card>
    </v-container>
</template>