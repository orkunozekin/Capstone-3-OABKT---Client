import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Required, Label } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import Button from '../Button/Button';
import { FaSpinner } from 'react-icons/fa';
import AppContext from '../../contexts/AppContext';
import './RegistrationForm.css';


class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  };

  static contextType = AppContext;

  state = { error: null, loading: false };

  firstInput = React.createRef();

  handleSubmit = ev => {
    this.setState({ loading: true });
    ev.preventDefault();
    const { name, username, password } = ev.target;
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
      .then(async user => {
        await this.props.onRegistrationSuccess(username, password);
        name.value = '';
        username.value = '';
        password.value = '';
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
        className="sign-up-form"
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>

        <Label htmlFor='registration-name-input'>
          Enter your name<Required />
        </Label>
        <Input
          ref={this.firstInput}
          id='registration-name-input'
          name='name'
          required
        />


        <Label htmlFor='registration-username-input'>
          Choose a username<Required />
        </Label>
        <Input
          id='registration-username-input'
          name='username'
          required
        />

        <Label htmlFor='registration-password-input'>
          Choose a password<Required />
        </Label>
        <Input
          id='registration-password-input'
          name='password'
          type='password'
          required
        />

        <footer className="footer">
          {!loading && <Button type='submit'>
            Sign up
          </Button>}
          {loading && <Button type='submit' disabled>
            <FaSpinner />
          </Button>}
          {' '}
          <Link to='/login'><h3 className='login-link'>Already have an account?</h3></Link>
        </footer>
      </form>
    );
  }
}

export default RegistrationForm;
