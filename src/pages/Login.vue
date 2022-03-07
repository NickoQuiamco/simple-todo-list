<template>
  <q-page class="flex justify-center content-start">
    <q-card class="auth-tab q-mt-lg">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Register" />
      </q-tabs>

      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <RegisterLoginTab :mode="tab" />
        </q-tab-panel>

        <q-tab-panel name="register">
          <RegisterLoginTab :mode="tab" />
        </q-tab-panel>
      </q-tab-panels>
      <div class="row q-mb-md q-px-md">
        <q-btn class="col-12" color="primary" label="Submit" unelevated no-caps />
      </div>
    </q-card>
  </q-page>
</template>

<script>
import RegisterLoginTab from 'components/RegisterLoginTab.vue';

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PageLogin',
  components: {
    RegisterLoginTab
  },
  setup(){
    return {
      tab: ref("login")
    }
  }
})
</script>
