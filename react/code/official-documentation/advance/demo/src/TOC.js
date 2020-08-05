import React from 'react';
import { Link } from 'react-router-dom';

function TOC() {
  return (
    <div className="toc">
      <Link to="/ref-forward">Ref 转发</Link>
    </div>
  );
}

export default TOC;
