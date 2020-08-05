import React from 'react';
import TestUpdateContext from './TestUpdateContext';

export default function TestUpdateFunc(params) {
  return (
    <TestUpdateContext.Consumer>
      {(value) => <div>{value}</div>}
    </TestUpdateContext.Consumer>
  );
}
