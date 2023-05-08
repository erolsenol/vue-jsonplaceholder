<template>
  <v-app-bar title="Application bar">
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
