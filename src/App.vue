<template>
  <router-view></router-view>
  <v-snackbar
    v-model="getSnackbar.state"
    :timeout="2000"
    :color="getSnackbar.color"
    class="text-aling"
  >
    {{ getSnackbar.text }}
  </v-snackbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters(['getSnackbar']),
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
