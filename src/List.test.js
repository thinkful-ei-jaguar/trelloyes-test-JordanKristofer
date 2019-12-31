import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';

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