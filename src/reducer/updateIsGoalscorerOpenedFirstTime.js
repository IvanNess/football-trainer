const updateIsGoalscorerOpenedFirstTime = (state, {type, payload}) =>{

    if(state===undefined){
        return true
    }

    switch(type){
        case 'ON_GOALSCORER':
            console.log(' on goalscorer is first opened', payload.manual, payload.manual === undefined ? true : false)
            return payload.manual === undefined ? true : false
        default:
            return state.isGoalscorerOpenedFirstTime
    }
}

export default updateIsGoalscorerOpenedFirstTime