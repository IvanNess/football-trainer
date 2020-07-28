import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import UserLoader from '../user-loader'
import useFetch from '../useFetch'
import PlayButton from '../play-btn'

import './log-in.scss'

const LogIn = ({user, setUsername}) => {
    const [{error, isLoading, data}, doFetch] = useFetch(`${process.env.REACT_APP_SERVER_URI}/login`)

    useEffect(()=>{
        if(error && error.response.status===403){
            message.error('Wrong user or password')
        }
    }, [error])

    if(user.isLoaded && user.username)
        return <Redirect to={`/user/${user.username}`}/>

    const onFinish = async values => {
        console.log('Received values of form: ', values)
        doFetch({data: {
            username: values.username,
            password: values.password,
        }})
    }

    console.log('data', data)
    if(data && data.username){
        setUsername({username: data.username})
    }

    return (
        <div className={`login-page`}>
            <UserLoader/>
            <div className={`wrapper`}>
                <h3>Authorization Page</h3>
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

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" disabled={isLoading}>
                            Log in
                        </Button>
                        <a href="/signup">...or register now!</a> 
                    </Form.Item>
                </Form>
                ...or skip authorization and proceed to the game
                <PlayButton/>
            </div>
        </div>
    )
}

const mapStateToProps = ({user})=>({
    user
})

const mapDispatchToProps = ({
    setUsername: (payload)=>({type: 'SET_USERNAME', payload})
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)