import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginRoute.css';
import Appcontext from '../../contexts/AppContext';

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  static contextType = Appcontext;

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    let loggedIn = this.context.loggedIn;
    return (
      <section className="login-header-wrapper">
        <h2 className="login-header">Login</h2>
        <LoginForm
          loggedIn = {loggedIn}
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    );
  }
}

export default LoginRoute
