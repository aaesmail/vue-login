import users from './users'

export default {
  autoLogin({ commit }) {
    const userEmail = localStorage.getItem('email')

    if (userEmail) {
      commit('login', userEmail)
    }
  },

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
      localStorage.setItem('email', user.email)
      return true
    }
  },

  logout({ commit }) {
    localStorage.removeItem('email')
    commit('logout')
  },
}
