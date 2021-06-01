import { createStore } from 'vuex'
import AuthModule from './auth/index'

export default createStore({
  modules: {
    auth: AuthModule,
  },
})
