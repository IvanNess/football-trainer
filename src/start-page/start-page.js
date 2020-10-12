import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import UserLoader from '../user-loader'
import PlayButton from '../play-btn'


import './start-page.scss'

const StartPage = ({user}) => {

    if(user.isLoaded && user.username)
        return <Redirect to={`${process.env.REACT_APP_MAIN_PATH}/game`}/>

    return (
        <div className={`start-page`}>
            <UserLoader/>
            {user.isLoaded && <div className={`wrapper`}>
                <h2>Guess a football year!!!</h2>
                <p>Push the play button to proceed to first challenge.</p>
                <PlayButton/>
                <div className={`sign`}>
                    ...or you could
                    <Link to={`${process.env.REACT_APP_MAIN_PATH}/login`} className={`log-in`}>log in</Link>
                    or
                    <Link to={`${process.env.REACT_APP_MAIN_PATH}/signup`} className={`sign-up`}>sign up</Link>
                    to record your results.
                </div>
            </div>}
        </div>
    )
}

const mapStateToProps = ({user})=>({user})

export default connect(mapStateToProps)(StartPage)