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
  </v-app-bar>
</template>

<script>
export default {
  name: 'ApplicationBar',
}
</script>
