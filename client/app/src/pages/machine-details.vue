<template>
<div class="q-pa-md">
  <div class="q-gutter-y-md">
    <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="justify" narrow-indicator>
      <q-tab name="os" label="OS"></q-tab>
      <q-tab name="env" label="ENV"></q-tab>
    </q-tabs>

    <q-separator></q-separator>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="os">
        <q-list v-if="machineData" bordered class="rounded-borders">
          <q-expansion-item expand-separator icon="mail" label="Operative system" default-opened>
            <q-item>Hostname: {{machineData.data.os.hostname}}</q-item>
            <q-item>Platform: {{machineData.data.os.platform}}</q-item>
            <q-item>Release: {{machineData.data.os.release}}</q-item>
            <q-item>Arch: {{machineData.data.os.arch}}</q-item>
            <q-expansion-item :header-inset-level="1" expand-separator icon="receipt" label="User info" default-opened>
                <q-item>Username: {{machineData.data.os.userInfo.username}}</q-item>
                <q-item>Homedir: {{machineData.data.os.userInfo.homedir}}</q-item>
                <q-item>Shell: {{machineData.data.os.userInfo.shell}}</q-item>
            </q-expansion-item>

            <q-expansion-item :header-inset-level="1" :content-inset-level="1" expand-separator icon="schedule" label="Network interfaces" default-opened>
                <q-expansion-item
                    switch-toggle-side
                    dense-toggle
                    label="Today"
                    :header-inset-level="1"
                    :content-inset-level="2"
                    v-for="(intf, index) of machineData.data.os.networkInterfaces.enp0s3"
                    v-bind:key="index">
                    <q-card>
                      <q-card-section>
                          <q-item>Address:{{intf.address}}</q-item>
                          <q-item>Netmask:{{intf.netmask}}</q-item>
                          <q-item>Family:{{intf.family}}</q-item>
                          <q-item>MAC:{{intf.mac}}</q-item>
                          <q-item>Internal:{{intf.internal}}</q-item>
                          <q-item>CIDR:{{intf.cidr}}</q-item>
                      </q-card-section>
                    </q-card>
                </q-expansion-item>
            </q-expansion-item>

          </q-expansion-item>
        </q-list>
      </q-tab-panel>

      <q-tab-panel name="env">
        <div class="text-h6">ENV</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </div>
</div>
</template>

<script>
export default {
  name: 'machine-details',
  data () {
    return {
      tab: 'os',
      machineData: ''
    }
  },
  created: function () {
    console.log('Details for machine with ID:', this.$route.query.id)
    this.machineData = this.$route.query.id
  }
}
</script>
