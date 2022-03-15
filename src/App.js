import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Headers from './common/Header';
import About from './components/About';
import Home from './components/Home';

import './style.css';

export default function App() {
  return (
    <React.StrictMode>
      <Router>
        <Headers />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  );
}
