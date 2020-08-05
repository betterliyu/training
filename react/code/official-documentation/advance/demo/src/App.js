import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TOC from './TOC';
import RefForward from './ref-forward';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <TOC />
          </Route>
          <Route exact path="/ref-forward">
            <RefForward />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
