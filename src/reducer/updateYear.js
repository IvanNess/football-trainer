import shuffle from 'shuffle-array'

import {allYears} from './index'

const updateYear = (state, {type, payload})=>{
    if(state===undefined){
        return shuffle.pick(allYears)
    }
    switch(type){
        case 'SET_YEAR':
            return payload.year
        case 'NEXT_QUESTION':
            return shuffle.pick(state.years)
        default:
            return state.year
    }
}

export default updateYear