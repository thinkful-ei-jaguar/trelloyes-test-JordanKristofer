import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';

//Smoke Testing
it('renders without crashing', () => {
  //DOM element to render the component into
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});
