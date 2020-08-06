import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import TOC from './TOC';
import CodeSplit from './code-split';
import Context from './context';
import RefForward from './ref-forward';
import HOC from './hoc';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">TOC</Link>
        <hr />
        <Switch>
          <Route exact path="/">
            <TOC />
          </Route>
          <Route path="/code-split">
            <CodeSplit />
          </Route>
          <Route path="/context">
            <Context />
          </Route>
          <Route path="/ref-forward">
            <RefForward />
          </Route>

          <Route path="/hoc">
            <HOC />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
