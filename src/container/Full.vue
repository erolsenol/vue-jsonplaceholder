<template>
  <v-layout>
    <ApplicationBar />
    <NavigationDrawer />
    <v-main class="h-screen bg-blue-lighten-5">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script>
import ApplicationBar from '@/components/ApplicationBar.vue'
import NavigationDrawer from '@/components/NavigationDrawer.vue'

export default {
  name: 'FullContainer',
  components: {
    ApplicationBar,
    NavigationDrawer,
  },
}
</script>

<style></style>
