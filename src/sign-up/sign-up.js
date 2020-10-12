import React, {useEffect, useCallback, useState} from 'react'
import {connect} from 'react-redux'
import {Redirect, NavLink} from 'react-router-dom'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import useFetch from '../useFetch'
import bcrypt from 'bcryptjs'

import UserLoader from '../user-loader'

import './sign-up.scss'
import PlayButton from '../play-btn'

const SignUp = ({user, setUsername, score, questionNumber}) => {

    const [{error, isLoading, data}, doFetch] = useFetch(`${process.env.REACT_APP_SERVER_URI}/signup`)

    const [{ isLoading: recordIsLoading, data: recordData }, recordDoFetch] = useFetch(`${process.env.REACT_APP_SERVER_URI}/record`)

    const [isRecord, setIsRecord] = useState(false)

    useEffect(() => {
        setIsRecord(document.location.search === '?record')
    }, [])

    const recordDoFetchCb = useCallback(recordDoFetch, [])

    useEffect(()=>{
        if (user.isLoaded && user.username && isRecord && !recordData) {
            recordDoFetchCb({
                data: {
                    score, questionNumber
                }
            }) 
        }
    }, [ recordDoFetchCb, user, recordData, isRecord, questionNumber, score])

    useEffect(()=>{
        if(recordData){
            setIsRecord(false)
        }
    }, [recordData, setIsRecord])

    const onFinish = async (values) => {
        const hashPassword = await bcrypt.hash(values.password, 10)
        doFetch({data: {
            username: values.username,
            password: hashPassword,
            //password: values.password,
            remember: values.remember
        }})
    }

    useEffect(()=>{
        if(error && error.response.status===403){
            message.error('Sorry! User with this username already exists.')
        }
    }, [error])

    useEffect(()=>{
        if (data && data.username) {
            setUsername({ username: data.username })
        }
    }, [data, setUsername])

    if(user.isLoaded && user.username && !isRecord)
        return <Redirect to={`${process.env.REACT_APP_MAIN_PATH}/user/${user.username}`}/>

    return (
        <div className={`signup-page`}>
            <UserLoader/>
            <div className={`wrapper`}>
                <h3>Registration Page</h3>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item
                        name="repeat"
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: 'Please repeat your Password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject('The two passwords that you entered do not match!');
                                },
                            }),
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Repeat your password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" disabled={isLoading || recordIsLoading}>
                            Sign Up
                    </Button>
                        <NavLink to={`${process.env.REACT_APP_MAIN_PATH}/login`}>...or log in if you have an account</NavLink>
                    </Form.Item>
                </Form>
                ...or skip registration and proceed to the game
                <PlayButton/>
            </div>
        </div>
    )
}

const mapStateToProps = ({user, score, questionNumber})=>({
    user, score, questionNumber
})

const mapDispatchToProps = ({
    setUsername: (payload)=>({type: 'SET_USERNAME', payload})
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)