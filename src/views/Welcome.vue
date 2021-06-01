<template>
  <h1>Welcome</h1>
  <button @click="logout">Logout</button>
</template>

<script>
import store from '../store'

export default {
  beforeRouteEnter(to, from, next) {
    store.getters['auth/isAuth'] ? next() : next('/login')
  },

  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    },
  },
}
</script>
