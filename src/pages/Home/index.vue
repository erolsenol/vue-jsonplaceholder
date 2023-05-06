<template>
  <div class="d-flex flex-column">
    <span>Home</span>
    <a href="#" @click="goIndexPage">Index Page</a>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goIndexPage() {
      this.$router.push('/')
    },
  },
}
</script>
