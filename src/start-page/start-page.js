import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import UserLoader from '../user-loader'
import PlayButton from '../play-btn'


import './start-page.scss'

const StartPage = ({user}) => {

    if(user.isLoaded && user.username)
        return <Redirect to='/game'/>

    return (
        <div className={`start-page`}>
            <UserLoader/>
            {user.isLoaded && <div className={`wrapper`}>
                <PlayButton/>
                <div className={`sign`}>
                    ...or you could
                    <Link to={`/login`} className={`log-in`}>log in</Link>
                    or
                    <Link to={`/signup`} className={`sign-up`}>sign up</Link>
                    to record your results.
                </div>
            </div>}
        </div>
    )
}

const mapStateToProps = ({user})=>({user})

export default connect(mapStateToProps)(StartPage)