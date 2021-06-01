<template>
  <div>
    <div>Email: {{ $store.getters['auth/userEmail'] || 'null' }}</div>
    <div>isAuth: {{ $store.getters['auth/isAuth'] || 'null' }}</div>
    <input type="text" v-model="email" />
    <br />
    <input type="text" v-model="password" />
    <br />
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import store from '../store'

export default {
  beforeRouteEnter(to, from, next) {
    store.getters['auth/isAuth'] ? next('/welcome') : next()
  },

  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    async login() {
      console.log(
        await this.$store.dispatch('auth/login', {
          email: this.email,
          password: this.password,
        })
      )
    },

    logout() {
      this.$store.dispatch('auth/logout')
    },
  },
}
</script>
