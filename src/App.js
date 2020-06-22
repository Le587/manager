import React from 'react';
import Frame from './components/Frame'
import Manager from './views/manager'
import Login from './views/login' 
import Message from './views/message'
import Settings from './views/settings'
import Dashboard from './views/dashboard'
import {Route,Redirect,Switch} from 'react-router-dom'

class App extends React.Component{
 
  render(){
    return (localStorage.getItem('token')?
        <Frame>
          <Switch>
            <Route path="/admin/manager" component={Manager}/>
            <Route path="/admin/dashboard" component={Dashboard}/>
            <Route path="/admin/message" component={Message}/>
            <Route path="/admin/settings" component={Settings}/>
            <Redirect to="/admin/dashboard" from="/admin" exact/>
            <Redirect to="/404" />
          </Switch> 
        </Frame>:
        <Switch>
           <Redirect to="/login" />
           </Switch>

    )
  }
}

export default App;
