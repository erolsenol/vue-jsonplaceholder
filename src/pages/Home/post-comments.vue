<template>
  <v-expand-x-transition>
    <v-layout class="right-layout">
      <v-sheet
        :width="width"
        class="panel overflow-y-auto"
        v-click-outside="{
          handler: onClickOutside,
          closeConditional: closeConditional,
        }"
      >
        <v-container>
          <v-card class="text-left">
            <v-card-item class="text-left" v-if="post">
              <UserAvatar :userId="post.userId" />
              <v-card-title>{{ post.title }}</v-card-title>
            </v-card-item>

            <v-card-text> {{ post.body }} </v-card-text>

            <v-card class="comments">
              <template v-for="(comment, index) in comments" :key="index">
                <v-divider></v-divider>
                <v-card-item class="text-left">
                  <v-card-title>{{ comment.name }}</v-card-title>

                  <v-card-subtitle>{{ comment.email }}</v-card-subtitle>
                  <v-card-text class="text-body-1">
                    {{ comment.body }}
                  </v-card-text>
                </v-card-item>
              </template>
            </v-card>
          </v-card>
          <v-card class="mt-2 text-start">
            <v-card-item>
              <v-card-title class="mb-3">New Comment</v-card-title>

              <v-text-field
                v-model="newComment.name"
                label="Name"
              ></v-text-field>

              <v-text-field
                v-model="newComment.email"
                label="Email"
              ></v-text-field>

              <v-text-field
                v-model="newComment.body"
                label="Body"
              ></v-text-field>

              <v-card-actions>
                <v-btn
                  :loading="loading"
                  :disabled="sendBtnActive"
                  variant="elevated"
                  color="primary"
                  class="mx-auto"
                  @click="sendComment"
                  >Send Comment</v-btn
                >
              </v-card-actions>
            </v-card-item>
          </v-card>
        </v-container>
      </v-sheet>
      <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        width="auto"
        persistent
      >
        <v-card>
          <template v-slot:append>
            <v-btn @click="dialogClose" icon="fas fa-xmark"></v-btn>
          </template>
          <v-card-text>
            <div class="text-h5 pa-7">Do you want to save your changes</div>
          </v-card-text>
          <v-card-actions class="justify-space-around">
            <v-btn
              v-if="!sendBtnActive"
              :loading="loading"
              class="mr-3"
              variant="tonal"
              color="green"
              @click.prevent="saveAndExit"
            >
              Save</v-btn
            >
            <v-btn
              :loading="loading"
              class="mx-3"
              variant="tonal"
              color="red"
              @click.prevent="$router.push({ name: 'home' })"
              >Exit</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-expand-x-transition>
</template>

<script>
import UserAvatar from '@/components/UserAvatar.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'PostComments',
  components: {
    UserAvatar,
  },
  props: {
    width: {
      type: [Number],
      default: 500,
    },
  },
  data() {
    return {
      dialog: false,
      postId: -1,
      comments: null,
      loading: false,
      newComment: {},
    }
  },
  computed: {
    ...mapGetters(['getIdByPost']),
    post() {
      return this.getIdByPost(this.postId) || false
    },
    sendBtnActive() {
      if (
        this.newComment.name &&
        this.newComment.email &&
        this.newComment.body
      ) {
        return false
      }
      return true
    },
    inputAnyFilling() {
      if (
        this.newComment.name ||
        this.newComment.email ||
        this.newComment.body
      ) {
        return true
      }
      return false
    },
  },
  methods: {
    async sendComment() {
      this.loading = true
      return new Promise((resolve, reject) => {
        this.$store
          .dispatch('newComment', {
            postId: this.postId,
            comment: this.newComment,
          })
          .then((newCommentRes) => {
            if (newCommentRes) {
              this.comments.push(newCommentRes)
              this.formClear()
              resolve(true)
            } else {
              this.$store.commit('showSnackbar', {
                text: 'Fill in all fields to comment',
                color: 'red',
              })
              reject(false)
            }
          })
      }).finally(() => {
        this.loading = false
      })
    },
    async saveAndExit() {
      const sendRes = await this.sendComment()
      if (sendRes) {
        this.$router.push({ name: 'home' })
      }
    },
    dialogClose() {
      this.dialog = false
    },
    onClickOutside() {
      if (this.dialog === false && this.inputAnyFilling) {
        this.dialog = true
        return
      }
      this.$router.push({ name: 'home' })
    },

    closeConditional() {
      return !this.dialog
    },
    formClear() {
      this.newComment = {}
    },
  },
  async mounted() {
    this.postId = this.$route.params.postId
    if (this.postId > -1) {
      this.comments = await this.$store.dispatch('getComments', this.postId)
    }
  },
}
</script>

<style>
.comments {
  overflow-y: auto;
}
</style>
