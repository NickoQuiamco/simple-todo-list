<template>
  <div>
    <q-banner rounded class="bg-grey-2 q-mb-sm">
      {{ titleCaseMode }}  to access the app everywhere.
    </q-banner>
    <q-form @submit.prevent="SubmitForm">
      <div class="row q-mb-sm">
        <q-input
          v-model="text"
          class="col-12"
          label="Username"
          outlined
          dense />
      </div>
      <div class="row q-mb-sm">
        <q-input
          v-model="text"
          type="password"
          class="col-12"
          outlined
          label="Password"
          dense />
      </div>
    </q-form>
  </div>
</template>
<script>
import { defineComponent, ref, computed} from 'vue';
export default defineComponent({
  name: "register-login-tab",
  props:["mode"],
  setup(props) {
    var titleCaseMode = computed(()=>{
      return props.mode.charAt(0).toUpperCase() + props.mode.slice(1);
    })
    return {
      text: ref(""),
      titleCaseMode: titleCaseMode,
      SubmitForm() {
        console.log('submit');
      }
    }

  },
})
</script>
