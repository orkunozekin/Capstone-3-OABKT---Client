import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import Dashboard from '../../routes/Dashboard/DashboardRoute';
import CurseRoute from '../../routes/CurseRoute/CurseRoute';
import BlessRoute from '../../routes/BlessRoute/BlessRoute';
import config from '../../config';
import TokenService from '../../services/token-service';
import AppContext from '../../contexts/AppContext';

class App extends Component {

  state = {
    quotes: {},
    user: {}
  }


  handleGetQuote = () => {
    fetch(`${config.API_ENDPOINT}/quotes`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(json => {
        this.setState({ quotes: json })
      })
  }

  handleGetDashboardInfo = () => {
    fetch(`${config.API_ENDPOINT}/user`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`, 
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(json => {
        this.setState({user: json})
      })
  }


  


  componentDidMount() {
    this.handleGetQuote();
    this.handleGetDashboardInfo();
  }



  render() {


    return (
      <AppContext.Provider
        value={{
          quotes: this.state.quotes,
          user: this.state.user,
          handleGetQuote: this.handleGetQuote,
          handleGetDashboardInfo: this.handleGetDashboardInfo
        }}
      >
        <div className="App">
          <Header />
          <main className="main">
            <Switch>
              <PublicOnlyRoute
                path={'/register'}
                component={RegistrationRoute}
              />
              <PublicOnlyRoute
                path={'/login'}
                component={LoginRoute}
              />
              <PublicOnlyRoute
                exact path={'/'}
                component={LandingPage}
              />
              <PublicOnlyRoute // change it to PrivateRoute once the server is deployed
                exact path={'/dashboard'}
                component={Dashboard}
              />
              <PublicOnlyRoute
                exact path={'/curse'}
                component={CurseRoute}
              />
              <PublicOnlyRoute // change it to PrivateRoute once the server is deployed
                exact path={'/bless'}
                component={BlessRoute}
              />
            </Switch>
          </main>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;