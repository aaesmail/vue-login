export default {
  // login user by creating a user object
  // store his email
  login(state, userEmail) {
    state.user = { email: userEmail }
  },

  // logout user by simply setting the user to null
  logout(state) {
    state.user = null
  },
}
