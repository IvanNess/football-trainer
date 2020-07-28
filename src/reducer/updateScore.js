const updateScore = (state, {type, payload})=>{
    if(state===undefined){
        return 0
    } 
    switch(type){
        case 'START_AGAIN':
            return 0
        case 'NEXT_QUESTION':
            return payload.isRightAnswered ? state.score + 1 : state.score
        case 'SET_GAME_END_PROPS':
            return payload.isRightAnswered ? state.score + 1 : state.score
        case 'ON_FIRST_MODAL':
            return state.score + 2
        case 'ON_GOALSCORER':
            console.log(state.isFirstAnswered, payload.manual, state.isGoalscorerOpenedFirstTime)
            return !state.isFirstAnswered && payload.manual && state.isGoalscorerOpenedFirstTime ? state.score - state.penalty : state.score
            
        default:
            return state.score
    }
}

export default updateScore