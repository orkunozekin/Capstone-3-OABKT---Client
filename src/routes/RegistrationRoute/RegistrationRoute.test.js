import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationRoute from './RegistrationRoute';
import { BrowserRouter as Router } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><RegistrationRoute /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
});


