import React from 'react';
import MultipleContext from './MultipleContext';
import TestUpdateContext from './TestUpdateContext';

export default (props) => {
  return (
    <TestUpdateContext.Consumer>
      {(testUpdate) => (
        <MultipleContext.Consumer>
          {(multi) => (
            <div>
              <p>context 1: {testUpdate}</p>
              <p>context 2: {multi}</p>
            </div>
          )}
        </MultipleContext.Consumer>
      )}
    </TestUpdateContext.Consumer>
  );
};
