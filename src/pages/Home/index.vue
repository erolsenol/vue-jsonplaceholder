<template>
  <div class="d-flex flex-column">
    <span>Home</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  computed: {
    ...mapGetters(['getPosts']),
  },
  mounted() {
    this.$store.dispatch('getPosts')
  },
}
</script>
