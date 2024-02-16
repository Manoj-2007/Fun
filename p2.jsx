import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header';
import States from './components/states/States';
// import Header from './components/header/Header';

ReactDOM.render(
  <div>
  <Header />
    <States />
  </div>,
  document.getElementById('reactapp'),
);
