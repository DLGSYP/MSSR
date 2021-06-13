import * as types from './mutations-type'

const mutations = {
    //相当于 'SET_USER_FILE'(state,product){}
    [types.SET_USER_FILE](state,userfile){
        state.userfile = userfile
    },
    
}

export default mutations