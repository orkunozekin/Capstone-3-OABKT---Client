import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import './App.css';
import LandingPageRoute from '../../routes/LandingPageRoute/LandingPageRoute';
import Dashboard from '../../routes/Dashboard/DashboardRoute';
import CurseRoute from '../../routes/CurseRoute/CurseRoute';
import BlessRoute from '../../routes/BlessRoute/BlessRoute';
import config from '../../config';
import TokenService from '../../services/token-service';
import AppContext from '../../contexts/AppContext';
import { UserProvider } from '../../contexts/UserContext';
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute';
import NewHeader from '../NewHeader/NewHeader';

class App extends Component {

 
  state = {
    quotes: {},
    user: {},
    loggedIn: false,
    curseBlessed : false
  };


  handleGetQuote = () => { //to get random quotes from the server.
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
        this.setState({ quotes: json });
      });
  };

  handleGetDashboardInfo = () => { // to get all the info needed to display on the user page (dashboard)
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
        this.setState({ user: json, curseBlessed: true });
      })
      .catch(e => console.log(e)); 
  };

  handleDeleteCurse = (curse_id) => { // to delete a curse from the server after it's been blessed and seen by the user. 
    fetch(`${config.API_ENDPOINT}/curses`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization' : `bearer ${TokenService.getAuthToken()}`
      },
      body : JSON.stringify({curse_id})
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('not deleted')
      })
      .then(json => {
        window.location.reload(false); // reload the page (at least for now) to get the next curse after deletion
      })
  }

  toggleLoggedIn = () => { 
    this.setState({ loggedIn: !this.state.loggedIn });
  };


  componentDidMount() {

   
    if (TokenService.hasAuthToken()) {
      this.toggleLoggedIn();
    }
  }


  render() {
    return (
      <AppContext.Provider
        value={{
          quotes: this.state.quotes,
          user: this.state.user,
          curseBlessed: this.state.curseBlessed,
          handleGetQuote: this.handleGetQuote,
          handleGetDashboardInfo: this.handleGetDashboardInfo,
          handleDeleteCurse: this.handleDeleteCurse
        }}
      >
        <UserProvider>
          <div className="App">
            {/* <Header toggleLoggedIn={this.toggleLoggedIn} loggedIn={this.state.loggedIn} /> */}
            <NewHeader toggleLoggedIn={this.toggleLoggedIn}/>
            <main className="main">
              <Switch>
                <PublicOnlyRoute
                  path={'/register'}
                  component={RegistrationRoute}
                />
                <PublicOnlyRoute
                  path={'/login'}
                  component={LoginRoute}
                  toggleLoggedIn={this.toggleLoggedIn}
                />
                <Route
                  exact path={'/'}
                  component={LandingPageRoute}
                />
                <PrivateRoute
                  exact path={'/dashboard'}
                  component={Dashboard}
                />
                <Route
                  exact path={'/curse'}
                  component={CurseRoute}
                />
                <PrivateRoute
                  exact path={'/bless'}
                  component={BlessRoute}
                />
                <Route
                  exact path={'/notfound'}
                  component={NotFoundRoute}
                />
              </Switch>
            </main>
          </div>
        </UserProvider>
      </AppContext.Provider>
    );
  }
}

export default App;
