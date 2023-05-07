<template>
  <div class="d-flex flex-column">
    <span>User</span>
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  methods: {},
  async mounted() {
    const users = await this.$httpConnector.get('users')
    console.log(users)
  },
}
</script>
