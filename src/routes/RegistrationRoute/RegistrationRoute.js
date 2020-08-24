import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { withRouter } from 'react-router-dom';
import AppContext from '../../contexts/AppContext';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

import './RegistrationRoute.css';



class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  };
  static contextType = AppContext;

  handleRegistrationSuccess = (username, password) => {
    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        TokenService.saveAuthToken(res.authToken);
        this.context.toggleLoggin();
      })
      .then(() => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || '/dashboard';
        history.push(destination);
      })
      .catch(res => {
        this.setState({ error: res.error, loading: false });
      });

  };

  render() {
    return (
      <>
        <section className="sign-up-wrapper">
          <h2 className='sign-up-header'>Sign Up</h2>
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </section>
      </>
    );
  }
}

export default withRouter(RegistrationRoute);
