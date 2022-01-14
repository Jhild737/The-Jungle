import React from 'react';
import ReactDOM from 'react-dom';
import MainGame from './MainGame';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainGame />, div);
  ReactDOM.unmountComponentAtNode(div);
});