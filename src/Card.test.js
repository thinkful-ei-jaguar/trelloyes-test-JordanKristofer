import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card.js';

describe('<Card />', () => {
  //Smoke Testing
  it('renders without crashing', () => {
    //DOM element to render the component into
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Snapshot Testing
  it('renders this UI as expected', () => {
    //render the component as JSON
    const tree = renderer
      .create(<Card />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

