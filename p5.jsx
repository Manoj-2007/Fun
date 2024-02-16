import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';
import Header from './components/header/Header';
import States from './components/states/States';
import Example from './components/example/Example';
import './p5.css';

class App extends Component {
    render() {
        return (
          <div>
            <Header />
            <HashRouter>
              <ul className="p5-nav">
                <li>
                  <Link to="/states">States</Link>
                </li>
                <li>
                  <Link to="/example">Example</Link>
                </li>
              </ul>
              <Route path="/states" component={States} />
              <Route path="/example" component={Example} />
            </HashRouter>
          </div>
        );
      }
    }

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
