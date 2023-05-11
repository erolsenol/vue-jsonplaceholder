<template>
  <v-layout class="right-layout">
    <v-sheet
      v-bind="$attrs"
      class="panel"
      v-click-outside="{
        handler: onClickOutside,
        closeConditional: closeConditional,
      }"
    >
      <v-container>
        <v-sheet width="300" class="mx-auto">
          <span class="text-h5 font-weight-bold"> User Edit</span>
          <v-text-field
            class="mt-3"
            v-model="editUser.name"
            label="Name"
          ></v-text-field>
          <v-text-field
            v-model="editUser.username"
            label="Username"
          ></v-text-field>
          <v-text-field v-model="editUser.phone" label="Phone"></v-text-field>
          <v-text-field
            v-model="editUser.website"
            label="Website"
          ></v-text-field>

          <span class="text-h6 font-weight-bold"> Company</span>
          <v-text-field
            v-model="editUser.company.name"
            label="Company Name"
          ></v-text-field>
          <v-text-field
            v-model="editUser.company.bs"
            label="Company Business"
          ></v-text-field>
          <v-text-field
            v-model="editUser.company.catchPhrase"
            label="Catch Phrase"
          ></v-text-field>
          <v-btn
            width="100"
            variant="tonal"
            color="green"
            :loading="loading"
            @click.prevent="userSave"
          >
            Save</v-btn
          >
        </v-sheet>
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
            class="mr-3"
            variant="tonal"
            color="green"
            @click.prevent="userSave"
          >
            Save</v-btn
          >
          <v-btn
            class="mx-3"
            variant="tonal"
            color="red"
            @click.prevent="$router.push({ name: 'user' })"
            >Exit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'UserEdit',
  props: {
    width: {
      type: [Number],
      default: 600,
    },
  },
  data() {
    return {
      drawerValue: true,
      dialog: false,
      userId: -1,
      editUser: { company: {} },
      originalUser: {},
      loading: false,
    }
  },
  methods: {
    dialogClose(e) {
      e.preventDefault()
      this.dialog = false
    },
    onClickOutside() {
      if (this.dialog === false) {
        if (!this.matchesUser(this.originalUser, this.editUser)) {
          this.dialog = true
        } else {
          this.$router.push({ name: 'user' })
        }
      }
    },
    async userSave() {
      this.loading = true
      const saveUserRes = await this.$store.dispatch('saveUser', {
        id: this.userId,
        user: this.editUser,
      })
      this.loading = false
      if (saveUserRes) {
        this.$router.push({ name: 'user' })
      }
    },
    matchesUser(originalUser = {}, editUser = {}) {
      const matchRes = Object.keys(originalUser).every(
        (key) =>
          // eslint-disable-next-line no-prototype-builtins
          editUser.hasOwnProperty(key) && editUser[key] === originalUser[key]
      )

      return matchRes
    },
    closeConditional() {
      return !this.dialog
    },
  },
  async mounted() {
    this.userId = this.$route.params.id

    const getUserRes = await this.$store.dispatch('getUser', this.userId)
    if (getUserRes) {
      this.editUser = getUserRes
      this.originalUser = { ...this.editUser }
    } else {
      this.$router.push({ name: 'user' })
    }
  },
}
</script>
