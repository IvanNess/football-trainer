const updateShowBonus = (state, {type, payload})=>{
    if(state===undefined){
        return false
    }
    switch(type){
        case 'START_AGAIN':
            return false
        case 'SET_SHOW_BONUS':
            return payload.value
        case 'ON_FIRST_MODAL':
            return payload.showBonus
        case 'NEXT_QUESTION':
            return false
        default:
            return state.showBonus
    }
}

export default updateShowBonus