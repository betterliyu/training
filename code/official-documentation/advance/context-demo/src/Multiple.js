import React from 'react';
import MultipleContext from './MultipleContext';
import TestUpdateContext from './TestUpdateContext';

export default (props) => {
  return (
    <TestUpdateContext.Consumer>
      {(testUpdate) => (
        <MultipleContext>
          {(multi) => (
            <div>
              {testUpdate} | {multi}
            </div>
          )}
        </MultipleContext>
      )}
    </TestUpdateContext.Consumer>
  );
};
