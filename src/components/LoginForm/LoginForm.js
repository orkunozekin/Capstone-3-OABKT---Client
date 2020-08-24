import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';
import { FaSpinner } from 'react-icons/fa';
import './LoginForm.css';
import { withRouter } from 'react-router-dom';


class LoginForm extends Component {

  static contextType = UserContext;

  state = { error: null, loading: false };

  firstInput = React.createRef();

  handleSubmit = ev => {
    ev.preventDefault();
    const { username, password } = ev.target;

    this.setState({ error: null, loading: true });

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = '';
        password.value = '';
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error, loading: false });

      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;
    const loading = this.state.loading;
    return (
      <form
        className='main-form'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>

        <p className='DemoCreds'>Try us out!</p>
        <p className='DemoCreds'>Username: DemoUser</p>
        <p className='DemoCreds'>Password: DemoUser*2</p>

        <Label htmlFor='login-username-input'>
          Username
          </Label>
        <Input
          ref={this.firstInput}
          id='login-username-input'
          name='username'
          required
        />

        <Label htmlFor='login-password-input'>
          Password
          </Label>
        <Input
          id='login-password-input'
          name='password'
          type='password'
          required
        />

        {!loading && <Button className='sign-up-button' type='submit'>
          Login
        </Button>}
        {loading && <Button className='sign-up-button' type='submit' disabled>
          <FaSpinner className='load-icon' />
        </Button>}
      </form>
    );
  }
}

export default withRouter(LoginForm);
