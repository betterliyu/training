import React from 'react';
import './App.css';

import TestUpdateContext from './TestUpdateContext';
import TestUpdateFunc from './TestUpdateFunc';
import TestUpdateParent from './TestUpdateParent';
import MultipleContext from './MultipleContext';
import Multiple from './Multiple';

class App extends React.Component {
  state = {
    updateValue: 'value1',
  };

  render() {
    return (
      <MultipleContext.Provider value={'multiple'}>
        <TestUpdateContext.Provider value={this.state.updateValue}>
          <div className='App'>
            <button
              onClick={() =>
                this.setState((prevState, prevProp) => ({
                  data: prevState.data === 'data1' ? 'data2' : 'data1',
                }))
              }
            >
              Toggle update text
            </button>
            <button
              onClick={() =>
                this.setState((prevState, prevProp) => ({
                  data: prevState.data === 'data1' ? 'data2' : 'data1',
                  updateValue:
                    prevState.updateValue === 'value1' ? 'value2' : 'value1',
                }))
              }
            >
              Toggle data text
            </button>
            <hr />
            <TestUpdateParent data={this.props.data}></TestUpdateParent>
            <hr />
            <TestUpdateFunc></TestUpdateFunc>
            ================================================
            <Multiple />
          </div>
        </TestUpdateContext.Provider>
      </MultipleContext.Provider>
    );
  }
}

export default App;
