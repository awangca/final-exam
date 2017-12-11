import Vue from 'vue'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'  // import modules for vee-validate
import { mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)
Vue.use(VeeValidate)    // use vee-validate

const state = {
  user: {},
  counts: {
    count: -1
  },
  posts: {}
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
