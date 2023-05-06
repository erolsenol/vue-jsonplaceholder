<template>
  <v-sheet width="400" class="mx-auto">
    <v-form @submit.prevent="login">
      <v-text-field v-model="username" label="Username"></v-text-field>

      <v-text-field v-model="password" label="Password"></v-text-field>
      <v-text-field
        v-if="signUp"
        v-model="confirmPassword"
        label="Confirm Password"
      ></v-text-field>
      <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>

      <v-btn type="submit" color="primary" block class="mt-2"
        >{{ !signUp ? 'Sign in' : 'Sign Up' }}
      </v-btn>
    </v-form>
    <div class="mt-2">
      <p class="text-body-2">
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
      password: '',
      confirmPassword: '',
      signUp: false,
    }
  },
  methods: {
    login(e) {
      console.log(e)
    },
  },
}
</script>
