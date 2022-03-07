<template>
  <q-page class="main-page">
    <span class="text-h3 page-title">About Us</span>
    <p class="text-body2" v-for="n in 15" :key="n">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam delectus doloremque dicta ratione consequatur veniam, odit neque a cum ducimus, id iusto nobis maiores modi fuga nesciunt harum expedita eos?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente labore ipsa quod ipsum fugiat sed consequuntur eum perspiciatis, a iste eligendi ad nulla repellendus inventore quaerat alias illum consequatur?
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageAboutUs'
})
</script>
