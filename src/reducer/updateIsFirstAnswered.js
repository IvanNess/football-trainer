const updateIsFirstAnswered = (state, {type, payload})=>{
    if(state===undefined){
        return false
    }
    switch(type){
        case 'START_AGAIN':
            return false
        case 'SET_IS_FIRST_ANSWERED':
            console.log('is first answered', payload)
            return payload.value
        case 'ON_FIRST_MODAL':
            console.log('on modal is first answered', payload)
            return payload.isFirstAnswered
        case 'NEXT_QUESTION':
            console.log('next question')
            return false
        default:
            return state.isFirstAnswered
    }
}

export default updateIsFirstAnswered