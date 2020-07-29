import React from "react";
import MultipleContext from "./MultipleContext";
import TestUpdateContext from "./TestUpdateContext";

export default (props) => {
  return (
    <TestUpdateContext.Consumer>
      {(testUpdate) => (
        <MultipleContext.Consumer>
          {(multi) => (
            <div>
              {testUpdate} | {multi}
            </div>
          )}
        </MultipleContext.Consumer>
      )}
    </TestUpdateContext.Consumer>
  );
};
