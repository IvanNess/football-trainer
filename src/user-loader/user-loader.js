import React, {useEffect, useCallback} from 'react'
import {connect} from 'react-redux'
import { Spin } from 'antd'

import useFetch from '../useFetch'

import './user-loader.scss'

const UserLoader = ({setUsername, setUser, fullLoad})=>{

    const[{error, isLoading, data}, doFetch] = useFetch(`${process.env.REACT_APP_SERVER_URI}/user`) 

    const doFetchCb = useCallback(doFetch, [])

    useEffect(()=>{
        if(!fullLoad){
            doFetchCb()
        }
        if(fullLoad){
            doFetchCb({fullLoad})
        }
    }, [doFetchCb, fullLoad])

    useEffect(()=>{
        if(data && data.username && !fullLoad){
            setUsername({username: data.username})
        }
        if(data && data.username && fullLoad){
            setUser(data)
        }
        if(error){
            setUser({username: undefined})
        }
    }, [error, isLoading, data, fullLoad, setUser, setUsername])

    return(
        <div className={`user-loader`}>
            {isLoading && <div className={`wrapper`}>
                <Spin size="large" />
            </div>}
        </div>
    )
}

const mapDispatchToProps = ({
    setUsername: (payload)=> ({type: 'SET_USERNAME', payload}),
    setUser: (payload)=> ({type: 'SET_USER', payload})
})

export default connect(null, mapDispatchToProps)(UserLoader)