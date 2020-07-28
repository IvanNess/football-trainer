import React from 'react'
import {Link} from 'react-router-dom'

import './play-btn.scss'

const PlayButton = ()=>{
    return(
        <Link to={`/game`} className={`play-btn`}>Play</Link>
    )
}

export default PlayButton