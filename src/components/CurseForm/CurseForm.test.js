import React from 'react';
import ReactDOM from 'react-dom';
import CurseForm from './CurseForm';
import { BrowserRouter as Router } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><CurseForm /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


