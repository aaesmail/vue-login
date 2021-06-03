import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// collect all objects of the auth module here
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
