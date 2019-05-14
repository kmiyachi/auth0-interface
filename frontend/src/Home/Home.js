import React, { Component } from 'react';
import LoginForm from '../Login/LoginForm'

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <h4>
                Landing Page!
              </h4>
            )
        }
        {
          !isAuthenticated() && (
              <LoginForm auth={this.props.auth}/>
            )
        }
      </div>
    );
  }
}

export default Home;