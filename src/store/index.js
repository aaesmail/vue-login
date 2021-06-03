import { createStore } from 'vuex'
import AuthModule from './auth'

// create the store with one module (auth module)
// Didn't create the auth store in the root
// to improve extendibility of the app
// so if I want to add more modules later
// it will be simple
export default createStore({
  modules: {
    auth: AuthModule,
  },
})
