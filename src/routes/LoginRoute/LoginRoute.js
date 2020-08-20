import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginRoute.css';
import Appcontext from '../../contexts/AppContext';
import { withRouter } from 'react-router-dom';

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  };

  static contextType = Appcontext;

  handleLoginSuccess = () => {
    console.log(this.props);
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/dashboard';
    this.context.handleGetDashboardInfo();
    history.push(destination);
    this.props.toggleLoggedIn();
  };

  render() {
    let loggedIn = this.context.loggedIn;
    return (
      <section className="login-wrapper">
        <h2 className="login-header">Login</h2>
        <LoginForm
          loggedIn={loggedIn}
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    );
  }
}

export default withRouter(LoginRoute);
