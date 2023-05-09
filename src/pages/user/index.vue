<template>
  <div class="d-flex flex-column">
    <span v-for="(user, index) in getUsers" :key="index">{{ user.name }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UserPage',
  computed: {
    ...mapGetters(['getUsers']),
  },
  methods: {},
  async mounted() {
    this.$store.dispatch('getUsers')
  },
}
</script>
