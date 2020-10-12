import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import {Modal, Button} from 'antd'

import useFetch from '../useFetch'

import './game-end.scss'

const GameEnd = ({ gameEndProps, score, isSecondAnswered, isFirstAnswered, years, dispatchStart, user, questionNumber }) => {

    const [{error, isLoading, data}, doFetch] = useFetch(`${process.env.REACT_APP_SERVER_URI}/record`)

    const [start, setStart] = useState(false)
    const [isToUserPage, seIsToUserPage] = useState(false)

    const startAgain = ()=>{
        doFetch({
            data:{
                score,
                questionNumber
            }
        })
    }

    useEffect(()=>{
        if(data || error){
            dispatchStart()
            setStart(true)
        }
    }, [error, data, dispatchStart])

    if(start){
        setStart(false)
        return <Redirect to={`${process.env.REACT_APP_MAIN_PATH}/game`}/>
    }

    if(!isLoading && isToUserPage){
        return <Redirect to={`${process.env.REACT_APP_MAIN_PATH}/user/${user.username}`}/>
    }

    const toUserPage = ()=>{
        startAgain()
        seIsToUserPage(true)
    }

    return (
        <div className={`game-end`}>
            <Modal
                title="Game over"
                visible={gameEndProps.visible}
                cancelText="Proceed to user page"
                footer={user.username? [
                    <Button onClick={toUserPage} disabled={isLoading}>
                        Proceed to user page
                    </Button>,
                    <Button type="primary" onClick={startAgain} disabled={isLoading}>
                        Start a new game
                    </Button>
                ]: [
                    <Button type="primary" onClick={startAgain} disabled={isLoading}>
                        Start a new game
                    </Button>
                ]}
                closable={false}
            >
                <div className={`modal-content`}>
                    {!gameEndProps.final && <div>{`You are wrong. It is ${years.year} year.`}</div>}
                    {isFirstAnswered && gameEndProps.isRightAnswered &&<div>{`Correct. It is ${gameEndProps.final}.`}</div>}
                    {isFirstAnswered && !gameEndProps.isRightAnswered &&<div>{`Not correct. It is ${gameEndProps.final}.`}</div>}
                    <div>{`Your final score is ${score} points.`}</div>
                    {!user.username && <div className={`record`} style={{margin: '1rem 0'}}>
                        You may<NavLink className={`link`} to={`${process.env.REACT_APP_MAIN_PATH}/login?record`} style={{'margin': '0.4rem'}}>Log in</NavLink>or
                        <NavLink className={`link`} to={`${process.env.REACT_APP_MAIN_PATH}/signup?record`} style={{'margin': '0.4rem'}}>Sign up</NavLink>
                        to record this result.
                    </div>}
                </div>
            </Modal>
        </div>
    )
}

const mapDispatchToProps = ({
    dispatchStart: ()=>({type: 'START_AGAIN'}),
})

const mapStateToProps = ({ gameEndProps, score, isSecondAnswered, years, isFirstAnswered, user, questionNumber }) => ({
    gameEndProps, score, isSecondAnswered, years, isFirstAnswered, user, questionNumber
})

export default connect(mapStateToProps, mapDispatchToProps)(GameEnd)