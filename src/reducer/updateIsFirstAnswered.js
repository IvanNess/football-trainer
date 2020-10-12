const updateIsFirstAnswered = (state, {type, payload})=>{
    if(state===undefined){
        return false
    }
    switch(type){
        case 'START_AGAIN':
            return false
        case 'SET_IS_FIRST_ANSWERED':
            return payload.value
        case 'ON_FIRST_MODAL':
            return payload.isFirstAnswered
        case 'NEXT_QUESTION':
            return false
        default:
            return state.isFirstAnswered
    }
}

export default updateIsFirstAnswered