import React from 'react';

import TestUpdateContext from './TestUpdateContext';
import TestUpdateFunc from './TestUpdateFunc';
import TestUpdateParent from './TestUpdateParent';
import MultipleContext from './MultipleContext';
import Multiple from './Multiple';

class App extends React.Component {
  state = {
    updateValue: 'context 1',
    data: 'props 1',
  };

  render() {
    return (
      <MultipleContext.Provider value={'multiple'}>
        <TestUpdateContext.Provider value={this.state.updateValue}>
          <div className="App">
            <h3>父组件 shouldComponentUpdate 不会阻止 context 对子组件的刷新</h3>
            <button
              onClick={() =>
                this.setState((prevState, prevProp) => ({
                  data: prevState.data === 'props 1' ? 'props 2' : 'props 1',
                }))
              }
            >
              修改 props 值
            </button>{' '}
            &nbsp;
            <button
              onClick={() =>
                this.setState((prevState, prevProp) => ({
                  data: prevState.data === 'props 1' ? 'props 2' : 'props 1',
                  updateValue: prevState.updateValue === 'context 1' ? 'context 2' : 'context 1',
                }))
              }
            >
              修改 context 值
            </button>
            <TestUpdateParent data={this.state.data}></TestUpdateParent>
            <h3>函数组件下使用 context </h3>
            <TestUpdateFunc></TestUpdateFunc>
            <h3>多重 context </h3>
            <Multiple />
          </div>
        </TestUpdateContext.Provider>
      </MultipleContext.Provider>
    );
  }
}

export default App;
