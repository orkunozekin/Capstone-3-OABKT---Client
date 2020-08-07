import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import { BrowserRouter as Router } from 'react-router-dom';


it.only('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Button /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
});


