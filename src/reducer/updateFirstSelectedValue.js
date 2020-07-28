const updateFirstSelectedValue = (state, {type, payload})=>{
    if(state===undefined){
        return 'Select a year'
    }
    switch(type){
        case 'SET_FIRST_SELECTED_VALUE':
            return payload.value
        case 'FIRST_VALUE_CHANGED':
            return payload.value
        case 'NEXT_QUESTION':
            return 'Select a year'    
        default: 
            return state.firstSelectedValue
    }
}

export default updateFirstSelectedValue