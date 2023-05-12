<template>
  <v-card max-width="500" class="mx-auto bg-grey-lighten-5">
    <v-card-text>
      <UserAvatar :userId="post.userId" />
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

      <v-btn @click="openComments" class="ms-1" icon>
        <v-icon color="black"> fas fa-comment </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import UserAvatar from './UserAvatar.vue'
export default {
  name: 'PostItem',
  components: {
    UserAvatar,
  },
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
  methods: {
    openComments() {
      this.$router.push({
        name: `postComments`,
        params: { postId: this.post.id },
      })
    },
  },
}
</script>

<style>
.comment-count {
  position: absolute !important;
  top: -10px !important;
  right: -8px !important;
  width: 20px;
  height: 20px;
  border-radius: 10px;
}
</style>
