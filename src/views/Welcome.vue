<template>
  <div>
    <h1>Welcome to {{ userEmail }}</h1>
    <button @click="logout">Log out</button>
  </div>
</template>

<script>
export default {
  computed: {
    userEmail() {
      return this.$store.getters['auth/userEmail']
    },
  },

  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="sass" scoped>
@import '../styles/variables.sass'
div
  padding: 0
  margin: 0
  height: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

h1
  margin: 0
  padding: 0
  font-size: 20px

  @media (min-width: $layout-breakpoint-small)
    font-size: 30px

button
  margin: 20px
  padding: 0
  width: 200px
  height: 50px
  background: $primary-color
  color: #FFF
  font-weight: bold
  border: 1px solid $primary-color
  border-radius: 5px

  &:hover
    cursor: pointer
    background: $primary-color-light
    border-color: $primary-color-light
</style>
