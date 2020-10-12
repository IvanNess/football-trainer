import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Table } from 'antd'

import UserLoader from '../user-loader'
import PlayButton from '../play-btn'
import useFetch from '../useFetch'

import './user-page.scss'

const UserPage = ({ user, match, setUser }) => {


    const [{ data }, doFetch] = useFetch(`${process.env.REACT_APP_SERVER_URI}/logout`)

    if ((user.isLoaded && user.username !== match.params.username) || (user.isLoaded && user.username === undefined)) {
        return <Redirect to={`${process.env.REACT_APP_MAIN_PATH}/login`} />
    }

    if (data && !data.username) {
        setUser({ username: undefined })
    }


    const logout = () => {
        doFetch()
    }

    const columns = [
        {
            title: 'Number',
            dataIndex: 'number',
            sorter: (a, b) => a.number - b.number,
            sortDirections: ['descend', 'ascend', 'descend'],
        },
        {
            title: 'Questions',
            dataIndex: 'questions',
            sortDirections: ['descend', 'ascend', 'descend'],
            sorter: (a, b) => a.questions - b.questions,
        },
        {
            title: 'Score',
            dataIndex: 'score',
            sorter: (a, b) => a.score - b.score,
            sortDirections: ['descend', 'ascend', 'descend'],
        },
        {
            title: 'Date',
            dataIndex: 'date',
            sorter: (a, b) => {
                return a.date > b.date
            },
            sortDirections: ['descend', 'ascend', 'descend'],
        },
    ]

    const results = user.results && user.results.map((result, idx) => {
        return ({
            key: result._id,
            number: idx + 1,
            questions: result.questions,
            score: result.score,
            date: new Date((Date.parse(result.date))).toLocaleString('ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            })
        })
    })

    return (
        <div className={`user-page`} >
            <UserLoader fullLoad={true} />
            {
                user.username && <div className={`user-page-wrapper`}>
                    <div className='header'>
                        <div className={`user`}>
                            {`User: `}<h3 className={`username`}>{user.username}</h3>
                            <div className='btn' onClick={logout}>
                                Logout
                            </div>
                        </div>
                        <div className={`game`}>
                            Proceed to the game: <PlayButton />
                        </div>
                    </div>

                    <div className={`table`}>
                        <h3>Your record table:</h3>
                        <Table columns={columns} dataSource={results} bordered={true} />
                    </div>
                </div>
            }
        </div >
    )
}

const mapStateToProps = ({ user }) => ({
    user
})

const mapDispatchToProps = ({
    setUser: (payload) => ({ type: 'SET_USER', payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)