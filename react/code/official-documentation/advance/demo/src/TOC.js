import React from 'react';
import { Link } from 'react-router-dom';

function TOC() {
  return (
    <div className="App">
      <Link to="/code-split">代码分割</Link>
      <br />
      <Link to="/context">Context</Link>
      <br />
      <Link to="/ref-forward">Ref 转发</Link>
      <br />
      <Link to="/hoc">HOC</Link>
    </div>
  );
}

export default TOC;
