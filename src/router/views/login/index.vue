<script>
import Layout from '@layouts/main/index.vue'
import { authMethods } from '@state/helpers'
import appConfig from '@src/app.config'

export default {
  page: {
    title: 'Log in',
    meta: [{ name: 'description', content: `Log in to ${appConfig.title}` }],
  },
  components: { Layout },
  data() {
    return {
      username: '',
      password: '',
      authError: null,
      tryingToLogIn: false,
    }
  },
  computed: {
    placeholders() {
      return process.env.NODE_ENV === 'production'
        ? {}
        : {
            username: 'Use "admin" to log in with the mock API',
            password: 'Use "password" to log in with the mock API',
          }
    },
  },
  methods: {
    ...authMethods,
    // Try to log the user in with the username
    // and password they provided.
    tryToLogIn() {
      this.tryingToLogIn = true
      // Reset the authError if it existed.
      this.authError = null
      return this.logIn({
        username: this.username,
        password: this.password,
      })
        .then((token) => {
          this.tryingToLogIn = false

          // Redirect to the originally requested page, or to the home page
          this.$router.push(this.$route.query.redirectFrom || { name: 'home' })
        })
        .catch((error) => {
          this.tryingToLogIn = false
          this.authError = error
        })
    },
  },
}
</script>

<template>
  <Layout>
    <v-layout justify-center>
      <BasePanel title="Login" :class="$style.form">
        <v-form>
          <BaseInputText
            v-model="username"
            name="username"
            label="Username"
            :placeholder="placeholders.username"
          >
          </BaseInputText>
          <br />
          <BaseInputText
            v-model="password"
            name="password"
            label="Password"
            type="password"
            :placeholder="placeholders.password"
          >
          </BaseInputText>
          <br />
          <p v-if="authError">
            There was an error logging in to your account.
          </p>
          <br />
          <v-btn
            class="cyan"
            dark
            :disabled="tryingToLogIn"
            @click="tryToLogIn"
          >
            <v-icon v-if="tryingToLogIn" name="sync" spin />
            <span v-else>
              Log in
            </span>
          </v-btn>
        </v-form>
      </BasePanel>
    </v-layout>
  </Layout>
</template>

<style lang="scss" module>
@import '@design';

.form {
  min-width: $size-content-width-min;
  max-width: $size-content-width-max;
  padding: 5px 2px 3px 4px;
  margin-top: 5px;
  text-align: center;
}
</style>
