<script lang="ts">
import { defineComponent } from 'vue';
import MachineCard from './MachineCard.vue';

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
        extractIpAddress(intfs) {
            const disallowedIntf = 'lo'
            const filteredName = Object.keys(intfs).filter(key => !(key === disallowedIntf))[0]

            return intfs[filteredName].address
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
                    v-bind:address="extractIpAddress(machine.networkInterfaces)">
                </machine-card>
            </div>
            
        </div>
    </v-container>
</template>