<template>
  <v-card max-width="500" class="mx-auto bg-grey-lighten-5">
    <v-card-text>
      <p class="text-h5">
        {{ post.title }}
      </p>
      <div class="text--primary text-body-1 mt-3">
        {{ post.body }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn icon @click="isLike = !isLike">
        <v-icon :color="isLike ? 'purple' : 'black'"> fas fa-heart </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLike: false,
    }
  },
  mounted() {
    this.$store.dispatch('getComments', this.post.id)
  },
}
</script>
