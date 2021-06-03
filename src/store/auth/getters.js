export default {
  //if there is a user get the email
  // if there is no user just return null
  userEmail(state) {
    return state.user ? state.user.email : null
  },

  // is Authorized?
  // check the user auth state
  // if user exists a truthy value is returned
  // if user is null (not logged in) a falsy value is returned
  isAuth(state) {
    return !!state.user
  },
}
