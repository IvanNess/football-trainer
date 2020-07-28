const updateIsSecondAnswered = (state, {type, payload})=>{
    if(state===undefined){
        return false
    }
    switch(type){
        case 'SET_IS_SECOND_ANSWERED':
            return payload.value
        default:
            return state.isSecondAnswered
    }
}

export default updateIsSecondAnswered