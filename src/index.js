import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notfound from './views/notfound'
import Login from './views/login' 
import {HashRouter as Router, Route,Switch,Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'


ReactDOM.render(
  <Provider store={store}>
  <Router>
    <Switch>
      <Route path='/admin' component={App}/>
      <Route path='/login' component={Login}/>
      <Route path='/404' component={Notfound}/>
      <Redirect to={localStorage.getItem('token')?"/admin":"/login"} from="/" exact/>
      <Redirect to='/404' />
    </Switch>
  </Router>
  </Provider>
  ,
  document.getElementById('root')
);


