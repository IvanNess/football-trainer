const updateUser = (state, {type, payload})=>{
    if(state===undefined){
        return {
            username: undefined,
            isLoaded: false
        }
    }
    switch(type){
        case 'SET_USERNAME':
            return ({
                username: payload.username,
                isLoaded: true
            })
        case 'SET_USER':
            return ({
                ...payload,
                isLoaded: true
            })
        default:
            return state.user
    }
}

export default updateUser