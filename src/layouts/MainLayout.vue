<template>
  <q-layout view="lHr lpr fFf">
    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="200"
        :breakpoint="500"
        elevated
      >
        <q-scroll-area class="fit">
          <!-- <q-toolbar-title v-if="!miniState">
            Quasar App
          </q-toolbar-title> -->
          <q-list padding>
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
          </q-list>
        </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer bordered class="bg-white text-primary">
      <q-toolbar>
        <q-toolbar-title class="flex flex-center text-weight-bold text-italic title-text">The Cooker</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Login / Sign-up',
    icon: 'login',
    link: '/login'
  },
  {
    title: 'Menu',
    icon: 'fastfood',
    link: '/menu'
  },
  {
    title: 'Order History',
    icon: 'history',
    link: '/history'
  },
  {
    title: 'Contact Us',
    icon: 'contacts',
    link: '/contact-us'
  },
  {
    title: 'About us',
    icon: 'person',
    link: '/about-us'
  },

];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    return {
      essentialLinks: linksList,
      miniState: ref(true),
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
