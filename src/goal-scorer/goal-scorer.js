import React from 'react'

import './goal-scorer.scss'

const GoalScorer = ({name, club, countryFlag, goals, visibility})=>{
    return(
        <div className={`goal-scorer ${visibility? 'show': 'hidden'}`}>
            <img src={countryFlag} alt={club}/>
            {`${name}(${club}, goals: ${goals})`}
        </div>
    )
}

export default GoalScorer