<template>
  <v-container class="page-user" fluid>
    <v-row>
      <v-col
        cols="12"
        md="6"
        lg="4"
        v-for="(user, index) in getUsers"
        :key="index"
      >
        <UserItem :user="user" />
      </v-col>
    </v-row>
    <v-expand-x-transition>
      <router-view :width="600"></router-view>
    </v-expand-x-transition>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import UserItem from '@/components/UserItem.vue'
export default {
  name: 'UserPage',
  components: {
    UserItem,
  },
  computed: {
    ...mapGetters(['getUsers']),
  },
  methods: {},
  async mounted() {
    this.$store.dispatch('getUsers')
  },
}
</script>

<style lang="scss">
.page-user {
  position: relative;
}
</style>
