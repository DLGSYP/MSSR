import * as types from './mutations-type'

const mutations = {
    //相当于 'SET_USER_FILE'(state,product){}
    [types.SET_USER_FILE](state, userfile){
        state.userfile = userfile
    },
    [types.SET_TRY](state,try1){
        state.try = try1
    },
    [types.SET_UID](state,uid){
        state.uid = uid
    }
}

export default mutations