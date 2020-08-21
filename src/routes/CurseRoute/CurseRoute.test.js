import React from 'react';
import ReactDOM from 'react-dom';
import CurseRoute from './CurseRoute';
import { BrowserRouter as Router } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><CurseRoute /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});


