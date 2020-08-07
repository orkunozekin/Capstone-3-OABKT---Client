import React from 'react';
import ReactDOM from 'react-dom';
import LoginRoute from './LoginRoute';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContext from '../../contexts/AppContext'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><AppContext.Provider value={{ loggedIn: false }}><LoginRoute /></AppContext.Provider></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


