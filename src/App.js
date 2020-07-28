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
  console.log(store.getState())

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={StartPage} />
          <Route path='/game' component={Main} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={LogIn} />
          <Route path='/user/:username' component={UserPage} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
