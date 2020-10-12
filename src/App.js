import React from 'react'
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import store from './store'

import Main from './main'
import StartPage from './start-page'
import SignUp from './sign-up'
import LogIn from './log-in'
import UserPage from './user-page'

import 'antd/dist/antd.css'
import './App.scss'

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={`${process.env.REACT_APP_MAIN_PATH}/`} exact component={StartPage} />
          <Route path={`${process.env.REACT_APP_MAIN_PATH}/game`} component={Main} />
          <Route path={`${process.env.REACT_APP_MAIN_PATH}/signup`} component={SignUp} />
          <Route path={`${process.env.REACT_APP_MAIN_PATH}/login`} component={LogIn} />
          <Route path={`${process.env.REACT_APP_MAIN_PATH}/user/:username`} component={UserPage} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
