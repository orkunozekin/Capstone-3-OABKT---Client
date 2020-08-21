import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { withRouter } from 'react-router-dom';
import AppContext from '../../contexts/AppContext';

import './RegistrationRoute.css';



class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  };
  static contextType = AppContext;

  handleRegistrationSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/dashboard';
    history.push(destination);
    this.context.toggleLoggin();
  };

  render() {
    return (
      <>
        <section className="sign-up-wrapper">
          <h2 className='sign-up-header'>Sign up</h2>
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </section>
      </>
    );
  }
}

export default withRouter(RegistrationRoute);
