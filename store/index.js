import vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import Vue from 'vue'

Vue.use(vuex)

export default new vuex.Store({
    state,
    getters,
    mutations,
    actions,
})