export const getUserflie = function(state){
    return state.userfile || window.localStorage.getItem('userfile')
}

