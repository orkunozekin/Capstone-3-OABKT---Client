import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import Dashboard from '../Dashboard/Dashboard';
import CurseRoute from '../../routes/CurseRoute/CurseRoute';
import Bless from '../Bless/Bless';

class App extends Component {
  render() {
    return (
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
              component={Bless}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
