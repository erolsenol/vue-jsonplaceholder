<template>
  <v-sheet width="400" class="mx-auto">
    <v-form @submit.prevent="submitForm">
      <span class="text-h4">
        {{ signUp ? 'Register Form' : 'Login Form' }}
      </span>

      <v-text-field
        class="mt-5"
        v-model="username"
        label="Username"
      ></v-text-field>

      <v-text-field v-model="email" label="Email"></v-text-field>

      <v-text-field v-model="password" label="Password"></v-text-field>
      <v-text-field
        v-if="signUp"
        v-model="confirmPassword"
        label="Confirm Password"
      ></v-text-field>

      <v-btn type="submit" color="primary" block class="mt-2"
        >{{ !signUp ? 'Sign in' : 'Sign Up' }}
      </v-btn>
    </v-form>
    <div class="mt-2">
      <p class="text-body-1">
        {{
          signUp ? 'Do you already have an account' : '  Don"t have an account?'
        }}

        <a href="#" @click="signUp = !signUp">
          {{ signUp ? 'Sing In' : 'Sign Up' }}
        </a>
      </p>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      signUp: false,
    }
  },
  methods: {
    submitForm() {
      if (!this.username || !this.password || !this.email) {
        this.$store.commit('showSnackbar', {
          text: 'Please fill in all fields',
          color: 'red',
        })
      }
      if (this.signUp) {
        if (this.password !== this.confirmPassword) {
          this.$store.commit('showSnackbar', {
            text: 'Passwords do not match',
            color: 'red',
          })
        }
      }

      this.$store.dispatch('loginOrRegisterUser', {
        username: this.username,
        email: this.email,
      })
    },
  },
}
</script>
