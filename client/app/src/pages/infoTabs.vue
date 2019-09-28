<template>
<div class="q-pa-md">
  <div class="q-gutter-y-md">
    <q-tabs v-model="tab" dense class="text-lime" active-color="lime" indicator-color="lime" align="justify" narrow-indicator>
      <q-tab name="os" label="OS"></q-tab>
      <q-tab name="env" label="ENV"></q-tab>
    </q-tabs>

    <q-separator class="bg-red"></q-separator>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="os">
        <q-list v-if="machineData" bordered class="rounded-borders">
          <q-expansion-item expand-separator icon="settings_system_daydream" label="Operative system" default-opened>
            <q-item><span>Hostname: </span> {{machineData.data.os.hostname}}</q-item>
            <q-item><span>Platform: </span> {{machineData.data.os.platform}}</q-item>
            <q-item><span>Release: </span> {{machineData.data.os.release}}</q-item>
            <q-item><span>Arch:</span> {{machineData.data.os.arch}}</q-item>
            <q-expansion-item :header-inset-level="1" expand-separator icon="person" label="User info" default-opened>
                <q-item><span>Username:</span> {{machineData.data.os.userInfo.username}}</q-item>
                <q-item><span>Homedir:</span> {{machineData.data.os.userInfo.homedir}}</q-item>
                <q-item><span>Shell:</span> {{machineData.data.os.userInfo.shell}}</q-item>
            </q-expansion-item>

            <q-expansion-item :header-inset-level="1" :content-inset-level="1" expand-separator icon="network_check" label="Network interfaces" default-opened>
                <q-expansion-item
                    switch-toggle-side
                    dense-toggle
                    :label="index"
                    :header-inset-level="1"
                    :content-inset-level="2"
                    v-for="(intf, index) in machineData.data.os.networkInterfaces"
                    v-bind:key="index">
                    <q-card>
                      <q-card-section>
                          <q-item
                          v-for="(prop, ind) of machineData.data.os.networkInterfaces[index][0]"
                          v-bind:key="ind"
                          >
                          {{ind}}: {{prop}}
                      </q-item>
                      </q-card-section>
                    </q-card>
                </q-expansion-item>
            </q-expansion-item>

          </q-expansion-item>
        </q-list>
      </q-tab-panel>

      <q-tab-panel name="env">
        <div class="text-h6">ENV</div>
            <q-list dense bordered padding class="rounded-borders">
              <q-item
              clickable
              v-ripple
              v-for="(variable, index) of machineData.data.env"
              :key="index">
                <q-item-section>
                  <b>{{index}}</b> {{variable}}
                </q-item-section>
              </q-item>
            </q-list>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</div>
</template>

<script>
export default {
  name: 'info-tabs',
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

<style lang="styl">
.q-tab-panels {
    background-color: transparent;
    color: $lime;
}

.q-tab-panels .q-item {
    border: 1px solid $graniteGray;
}

.q-expansion-item span {
    color: $mintGreen;
    font-weight: bold;
}
.q-item .column {
    color: $chromeYellow;
}
</style>
