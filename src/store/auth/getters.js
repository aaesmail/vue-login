export default {
  userEmail(state) {
    return state.user ? state.user.email : null
  },

  isAuth(state) {
    return !!state.user
  },
}
