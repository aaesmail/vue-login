import users from './users'

export default {
  // try to login user automatically
  // user is stored in local storage
  // as a key of email where the user's email is stored
  autoLogin({ commit }) {
    const userEmail = localStorage.getItem('email')

    if (userEmail) {
      commit('login', userEmail)
    }
  },

  // login in the user
  login({ commit }, user) {
    // try to find the user in the users list
    // if the email and password match anyone in the list
    // userIndex will be that user's index
    // if it doesn't match userIndex will be -1
    const userIndex = users.findIndex(
      (userData) =>
        userData.email === user.email && userData.password === user.password
    )

    // failed to find user
    // return false to indicate failed to login
    if (userIndex === -1) {
      // not valid login
      return false
    } else {
      // found user
      // valid login
      // store user in local storage for auto login later
      commit('login', user.email)
      localStorage.setItem('email', user.email)
      return true
    }
  },

  // logout user by commiting the logout action
  // + removing the email key from local storage
  // so when user comes back he is not logged in
  logout({ commit }) {
    localStorage.removeItem('email')
    commit('logout')
  },
}
