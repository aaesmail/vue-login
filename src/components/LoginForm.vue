<template>
  <form @submit.prevent="login">
    <div class="fail-message" v-if="loginFail">
      Your email and/or password are incorrect
    </div>
    <FormTextInput
      title="Work Email"
      type="email"
      hint="you@company.com"
      :rules="emailRules"
      errorMessage="Enter a valid email address."
      @input="emailChanged"
    />
    <FormTextInput
      title="Password"
      secondaryText="Forgot password?"
      type="password"
      hint="8+ Characters"
      :rules="passwordRules"
      errorMessage="Password must be 8 characters or more"
      @input="passwordChanged"
    />
    <LoginButton :disabled="!valid" />
  </form>
</template>

<script>
import FormTextInput from './FormTextInput'
import LoginButton from './LoginButton'

export default {
  components: { FormTextInput, LoginButton },

  data() {
    return {
      email: '',
      emailValid: false,
      password: '',
      passwordValid: false,
      valid: false,
      loginFail: false,
    }
  },

  computed: {
    emailName() {
      return this.email.substring(0, this.email.indexOf('@'))
    },

    emailRules() {
      return {
        expression:
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      }
    },

    passwordRules() {
      return {
        expression: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
        length: 8,
        notContain: this.emailName,
      }
    },
  },

  methods: {
    emailChanged(email, valid) {
      this.email = email
      this.emailValid = valid
      this.valid = this.emailValid && this.passwordValid
    },

    passwordChanged(password, valid) {
      this.password = password
      this.passwordValid = valid
      this.valid = this.emailValid && this.passwordValid
    },

    async login() {
      const loginSuccess = await this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
      })

      loginSuccess ? this.$router.push('/welcome') : (this.loginFail = true)
    },
  },
}
</script>

<style lang="sass" scoped>
@import '../styles/variables'

form
  margin: 0
  padding: 0

.fail-message
  padding: 10px 9px
  text-align: left
  margin: 0 auto 15px auto
  width: 60%
  background: MistyRose
  color: $primary-text-light
  font-size: 15px
  border: 1px solid RosyBrown
  border-radius: 5px
  outline: none
</style>
