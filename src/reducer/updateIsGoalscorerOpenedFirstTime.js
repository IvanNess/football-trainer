const updateIsGoalscorerOpenedFirstTime = (state, {type, payload}) =>{

    if(state===undefined){
        return true
    }

    switch(type){
        case 'ON_GOALSCORER':
            return payload.manual === undefined ? true : false
        default:
            return state.isGoalscorerOpenedFirstTime
    }
}

export default updateIsGoalscorerOpenedFirstTime