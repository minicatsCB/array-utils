<template>
    <div class="q-pa-md">
          <div class="q-gutter-y-md">
              <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="justify"
                narrow-indicator
              >
                <q-tab name="os" label="OS" ></q-tab>
                <q-tab name="env" label="ENV" ></q-tab>
              </q-tabs>

              <q-separator ></q-separator>

              <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="os">
                  <div class="text-h6">OS</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
      tab: 'os'
    }
  },
  created: function () {
    console.log('Details for machine with ID:', this.$route.query.id)
  }
}
</script>
