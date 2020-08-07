import React from 'react';
import ReactDOM from 'react-dom';
import BlessRoute from './BlessRoute';
import { BrowserRouter as Router } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><BlessRoute /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


