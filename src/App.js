import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import Home from './component/home';
import Users from './component/users';
import Userdetails from './component/userdetails';
// import Userdetails from './component/userdetails';

// const WithRouterUserDetails = withRouter(Userdetails);

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/users' component={Users} />
          {/* <Route exact path='/login' component={Login} /> */}
          {/* <Route exact path='/users/:login' render={() => (<WithRouterUserdetails />)} /> */}
          <Route exact path='/users/:login' component={Userdetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
