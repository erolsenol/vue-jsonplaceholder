<template>
  <v-navigation-drawer
    class="bg-brown-lighten-5"
    v-model="$store.state.navigationDrawerValue"
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
        title="John Leider"
        subtitle="john@google.com"
      >
        <template v-slot:append>
          <v-btn size="small" variant="text" icon="mdi-menu-down"></v-btn>
        </template>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list :lines="false" density="compact" nav>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        active-color="primary"
        class="menu-item"
        :active="currentRouteName.includes(item.name)"
        @click="goToPage(item.name)"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title
          class="text-subtitle-1"
          v-text="item.text"
        ></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data: () => ({
    navigationDrawerValue: true,
    selectedItem: 0,
    items: [
      { text: 'Posts', icon: 'fas fa-home', name: 'home' },
      { text: 'Users', icon: 'fas fa-user', name: 'user' },
    ],
  }),
  computed: {
    currentRouteName() {
      return this.$route.path
    },
  },
  methods: {
    goToPage(name) {
      this.$router.push({ name })
    },
  },
}
</script>

<style>
.menu-item {
  min-height: 40px;
}
</style>
