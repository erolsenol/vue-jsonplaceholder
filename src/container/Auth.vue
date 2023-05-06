<template>
  <v-container fill-height class="h-screen d-flex align-center">
    <v-row justify="center">
      <v-col sm="9" md="7" lg="5" xl="4">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AuthContainer',
}
</script>

<style>
.qwe {
  background-color: aqua;
}
</style>
