import React from 'react';
import ReactDOM from 'react-dom';
import LandingPageRoute from '../../routes/LandingPageRoute/LandingPageRoute';
import { BrowserRouter as Router } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><LandingPageRoute /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
});


