import React from 'react';
import { Link } from 'react-router-dom';

function TOC() {
  return (
    <div className="App">
      <Link to="/code-split">代码分割</Link>
      <br />
      <br />
      <Link to="/context">Context</Link>
      <br />
      <br />
      <Link to="/ref-forward">Ref 转发</Link>
    </div>
  );
}

export default TOC;
