const updatePenalty = (state, {type, payload})=>{
    if(state===undefined){
        return 1
    }
    switch(type){
        case 'NEXT_QUESTION':
            return 1
        case 'ON_GOALSCORER':
            return state.isFirstAnswered && payload.manual ? 0 : 1
        default:
            return state.penalty
    }
}

export default updatePenalty