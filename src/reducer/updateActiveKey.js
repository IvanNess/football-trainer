const updateActiveKey = (state, {type, payload})=>{
    if(state===undefined){
        return []
    }

    switch(type){
        case 'ON_GOALSCORER':
            console.log('on goalscorer', payload)
            return payload.activeKey.length === 0 ? [] : [1]

        default: 
            return state.activeKey
    }

    
}

export default updateActiveKey