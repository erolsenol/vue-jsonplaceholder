<template>
  <v-container class="bg-blue-lighten-5" fluid>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="4"
        xl="3"
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

<style lang="scss"></style>
