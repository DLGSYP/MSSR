export const getUserflie = function(state){
    return (
       // state.userfile || JSON.parse(window.localStorage.getItem('userfile'))
       state.userfile
    )
}

export const gettry = function(state){
    return state.try
}