<template>
  <div class="container">
    <div class="column">
      <Carousel />
    </div>
    <div class="column">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel'
import LoginForm from '../components/LoginForm'

export default {
  components: {
    Carousel,
    LoginForm,
  },

  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    async login() {
      const loggedIn = await this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
      })

      if (loggedIn) {
        // successful
        this.$router.push('/welcome')
      } else {
        // invalid login information
      }
    },

    logout() {
      this.$store.dispatch('auth/logout')
    },
  },
}
</script>

<style lang="sass" scoped>
@import '../styles/variables'

.container
  margin: 0
  padding: 0
  height: 100%
  display: flex
  flex-direction: column-reverse
  justify-content: space-around

  @media (min-width: $layout-breakpoint-small)
    flex-direction: row

.column
    margin: 0
    padding: 0
    width: 100%
    height: 100%
</style>
