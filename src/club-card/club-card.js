import React from 'react'

import './club-card.scss'

const ClubCard = ({name, logoUrl})=>{
    return(
        <div className={`club-card`}>
            <img src={logoUrl} alt={name}/>
            {name}
        </div>
    )
}

export default ClubCard