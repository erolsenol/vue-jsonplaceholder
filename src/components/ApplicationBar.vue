<template>
  <v-app-bar class="bg-brown-lighten-5" title="Json Place Holder Project">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        @click="
          $store.state.navigationDrawerValue =
            !$store.state.navigationDrawerValue
        "
      ></v-app-bar-nav-icon>
    </template>

    <template v-slot:append>
      <v-btn @click="logout" icon="fas fa-right-from-bracket"></v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: 'ApplicationBar',
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
  },
}
</script>
