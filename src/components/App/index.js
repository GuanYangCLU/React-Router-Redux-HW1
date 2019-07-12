import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import Home from '../home';
import Users from '../users';
import Userdetails from '../userdetails';
import Login from '../login';
// @@ link内传参：<Link to={{pathname: '',state: {}}} /> @@@@@@
// const WithRouterUserDetails = withRouter(Userdetails);

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/list' component={Users} />
          <Route exact path='/login' component={Login} />
          {/* <Route exact path='/users/:login' render={() => (<WithRouterUserdetails />)} /> */}
          <Route exact path='/list/:login' component={Userdetails} />
          {/* <Route path='*' component={Login} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
