import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';
import { FaSpinner } from 'react-icons/fa';
import './LoginForm.css';
import TokenService from '../../services/token-service';
import { withRouter } from 'react-router-dom';


class LoginForm extends Component {

  static contextType = UserContext;

  state = { error: null, loading: false }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { username, password } = ev.target

    this.setState({ error: null, loading: true })

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        // console.log(this.props.history);
        this.props.onLoginSuccess();
        // this.props.history.push('/')
        // window.location.reload(true)
      })
      .catch(res => {
        this.setState({ error: res.error, loading: false })
        console.log(res)
      })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state
    const loading = this.state.loading;
    return (
      <form
        className='main-form'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>

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

        {!loading && <Button type='submit'>
          Login
        </Button>}
        {loading && <Button type='submit' disabled>
        <FaSpinner />
        </Button>}
      </form>
    )
  }
}

export default withRouter(LoginForm);
