import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import UserLoader from '../user-loader'

import './user-panel.scss'

const UserPanel = ({ questionNumber, score, user }) => {

    return (
        <div className={`user-panel`}>
            <UserLoader />
            <div className={`username`}>
                <NavLink to={`${process.env.REACT_APP_MAIN_PATH}/user/${user.username}`} className={`link`}>{user.isLoaded && user.username}</NavLink>
                {
                    user.isLoaded && !user.username
                    && <span>
                        <NavLink className='link' to={`${process.env.REACT_APP_MAIN_PATH}/login`}>Log in</NavLink>
                        <NavLink className='link' to={`${process.env.REACT_APP_MAIN_PATH}/signup`}>Sign up</NavLink>
                    </span>
                }
            </div>
        
            <div className={`data`}>
                <div className={`question-number`}>{`Challenge: ${questionNumber}`}</div>
                <div className={`score`}>{`Your points: ${score}`}</div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ questionNumber, score, user }) => ({
    questionNumber, score, user
})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel)