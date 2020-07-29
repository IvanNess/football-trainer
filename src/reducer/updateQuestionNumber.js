const updateQuestionNumber = (state, {type, payload})=>{
    if(state===undefined){
        return 1
    }
    switch(type){
        case 'START_AGAIN':
            return 1
        case 'NEXT_QUESTION':
            return state.questionNumber + 1
        default:
            return state.questionNumber
    }
}

export default updateQuestionNumber