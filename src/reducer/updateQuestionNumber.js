const updateQuestionNumber = (state, {type, payload})=>{
    if(state===undefined){
        return 10
    }
    switch(type){
        case 'START_AGAIN':
            return 10
        case 'NEXT_QUESTION':
            return state.questionNumber + 1
        default:
            return state.questionNumber
    }
}

export default updateQuestionNumber