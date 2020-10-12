import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do</h1>
        <Nav />
      </header>

      <Switch>
      <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
