import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js';


describe('<List />', () => {
  //Smoke Testing 
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <List 
        // header='TEST HEADER'
        cards={[
          {id: 1, title:'TEST 1 Title', content: 'Test is working!'},
          {id: 2, title: 'TEST 2 Title', content: 'Test 2 is wokring!'}
        ]}
      />, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  //Snapshot Testing 
  it('renders this UI as expected', () => {
    //render the component as JSON
    const tree = renderer
      .create(<List 
        cards={[
          {id: 1, title:'TEST 1 Title', content: 'Test is working!'},
          {id: 2, title: 'TEST 2 Title', content: 'Test 2 is wokring!'}
        ]} 
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});

