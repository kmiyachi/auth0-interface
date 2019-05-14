import React from 'react';
import { Router, Route, Redirect } from "react-router-dom";
import Home from './Home/Home'
import Auth from './Auth/Auth.js';
import history from './history';
import Callback from './Callback/Callback'
import Interface from './Interface'
import SignUpForm from './SignUp/SignUpForm'

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" render={(props) => <Interface auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/signup" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <SignUpForm auth={auth} {...props} />
            )
          )} />        
          <Route path="/callback" render={(props) => { handleAuthentication(props); return <Callback auth={auth} /> }} />
      </div>
    </Router>
  );
}