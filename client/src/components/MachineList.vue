<script lang="ts">
import { defineComponent } from 'vue';
import MachineCard from './MachineCard.vue';
import { extractIpAddress } from "../utils/machineFilter"

export default defineComponent({
    name: 'machines',
    components: {
        MachineCard
    },
    props: {
        machines: []
    },
    methods: {
        goToMachineDetails: function (machine) {
            this.$router.push({
                path: 'infoTabs',
                query: {
                    id: machine
                }
            })
        },
        getAddress: function(intfs) {
            return extractIpAddress(intfs);
        }
    }
});
</script>

<template>
    <v-container>
        <div class="row">
            <div class="col-6">
                <machine-card v-for="(machine, index) of machines" v-bind:key="index"
                    @click.native="goToMachineDetails(JSON.stringify(machine))" v-bind:hostname="machine.os.hostname"
                    v-bind:address="getAddress(machine.networkInterfaces)">
                </machine-card>
            </div>
            
        </div>
    </v-container>
</template>