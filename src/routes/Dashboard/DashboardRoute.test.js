import React from 'react';
import ReactDOM from 'react-dom';
import DashboardRoute from './DashboardRoute';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContext from '../../contexts/AppContext'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><AppContext.Provider value={{ quotes: {}, user: {} }}><DashboardRoute /></AppContext.Provider></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


