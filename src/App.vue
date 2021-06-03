<template>
  <router-view />
</template>

<script>
export default {
  created() {
    this.$store.dispatch('auth/autoLogin')
  },
}
</script>

<style lang="sass">
@import './styles/variables.sass'

html, body
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  height: 100%
  overflow: auto
  margin: 0
  padding: 0

body
  background: $background-color

#app
  margin: 0
  padding: 0
  overflow: auto
  height: 100%
</style>
