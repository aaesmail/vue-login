import users from './users'

export default {
  login({ commit }, user) {
    const userIndex = users.findIndex(
      (userData) =>
        userData.email === user.email && userData.password === user.password
    )

    if (userIndex === -1) {
      // not valid login
      return false
    } else {
      // valid login
      commit('login', user.email)
      return true
    }
  },

  logout({ commit }) {
    commit('logout')
  },
}
