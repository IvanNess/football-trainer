const updateGameEndProps = (state, {type, payload}) =>{
    if(state===undefined){
        return {
            visible: false
        }
    }

    switch(type){
        case 'START_AGAIN':
            return {
                visible: false
            }
            
        case 'SET_GAME_END_PROPS':
            console.log('set game end props', payload)
            return payload
        default:
            return state.gameEndProps
    }
}

export default updateGameEndProps