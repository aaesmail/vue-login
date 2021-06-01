import { createStore } from 'vuex'
import AuthModule from './auth'

export default createStore({
  modules: {
    auth: AuthModule,
  },
})
