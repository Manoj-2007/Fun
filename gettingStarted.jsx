import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header'; // Import the Header component
import './styles/main.css';

import Example from './components/example/Example';

ReactDOM.render(
  <div>
    <Header />
    <Example />
  </div>,
  document.getElementById('reactapp'),
);
