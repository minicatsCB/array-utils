<template>
<div class="q-pa-md">
  <div class="q-gutter-y-md">
    <q-tabs v-model="tab" dense class="text-lime" active-color="lime" indicator-color="lime" align="center" narrow-indicator>
      <q-tab name="os" label="OS"></q-tab>
      <q-tab name="env" label="ENV"></q-tab>
    </q-tabs>

    <q-separator class="bg-lime"></q-separator>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="os">
        <q-list v-if="machineData" class="q-px-xl">
          <q-expansion-item expand-separator icon="settings_system_daydream" label="Operating system" default-opened>
            <q-item v-for="(val, key) of machineData.os" v-bind:key="key">
              <q-item-section>
                <q-item-label class="col-3 text-lime text-capitalize">{{key}}</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-lime">{{val}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item expand-separator icon="person" label="User info">
            <q-item v-for="(val, key) of machineData.userInfo" v-bind:key="key">
              <q-item-section>
                <q-item-label class="col-3 text-lime text-capitalize">{{key}}</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-lime">{{val}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item expand-separator icon="network_check" label="Network interfaces">
            <q-expansion-item switch-toggle-side dense-toggle :label="intfName" :header-inset-level="1" :content-inset-level="1" v-for="(value, intfName) in machineData.networkInterfaces" v-bind:key="intfName">
              <q-item v-for="(val, key) of machineData.networkInterfaces[intfName]" v-bind:key="key">
                <q-item-section>
                  <q-item-label class="col-3 text-lime text-capitalize">{{key}}</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-lime">{{val}}</q-item-label>
                </q-item-section>
              </q-item>
            </q-expansion-item>
          </q-expansion-item>
        </q-list>
      </q-tab-panel>

      <q-tab-panel name="env">
        <q-list dense padding class="q-px-xl">
          <q-item clickable v-ripple v-for="(val, key) of machineData.env" :key="key">
            <q-item-section>
              <q-item-label class="text-bold">{{key}}</q-item-label>
              <q-item-label>{{val}}</q-item-label>
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
      machineData: {
        os: {
          arch: '',
          hostname: '',
          platform: '',
          release: '',
          type: ''
        },
        userInfo: {},
        networkInterfaces: {},
        env: {}
      }
    }
  },
  methods: {
    removeEmptyProperties (obj) {
      const newObj = {}

      Object.keys(obj).forEach(key => {
        if (obj[key]) {
          newObj[key] = obj[key]
        }
      })

      return newObj
    }
  },
  created: function () {
    let queryMachine = this.$route.query.id
    console.log('Details for machine with ID:', queryMachine.id)

    for (let key in this.machineData.os) {
      this.machineData.os[key] = queryMachine.data.os[key]
    }

    this.machineData.userInfo = queryMachine.data.os.userInfo

    let networkInterfaces = queryMachine.data.os.networkInterfaces
    for (let intf in networkInterfaces) {
      for (let elem of networkInterfaces[intf]) {
        if (elem.family === 'IPv4') {
          this.machineData.networkInterfaces[intf] = elem
        }
      }
    }

    this.machineData.env = this.removeEmptyProperties(queryMachine.data.env)
  }
}
</script>

<style lang="styl">
.q-tab-panels {
    background-color: transparent;
    color: $lime;
}

.q-tab-panels .q-item {
    border-bottom: 1px solid $graniteGray;
}

.q-expansion-item span {
    color: $mintGreen;
    font-weight: bold;
}

.q-item .column {
    color: $chromeYellow;
}
</style>
