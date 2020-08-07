import React from 'react';
import ReactDOM from 'react-dom';
import { Label, Input, Required, Textarea } from './Form';



it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Label />, div);
    ReactDOM.unmountComponentAtNode(div);
});
  

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Required />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Textarea />, div);
  ReactDOM.unmountComponentAtNode(div);
});


