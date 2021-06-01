export default {
  login(state, userEmail) {
    state.user = { email: userEmail }
  },

  logout(state) {
    state.user = null
  },
}
