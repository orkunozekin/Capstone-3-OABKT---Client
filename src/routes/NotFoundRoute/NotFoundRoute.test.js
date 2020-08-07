import React from 'react';
import ReactDOM from 'react-dom';
import NotFoundRoute from './NotFoundRoute';
import { BrowserRouter as Router } from 'react-router-dom';



it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><NotFoundRoute /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


