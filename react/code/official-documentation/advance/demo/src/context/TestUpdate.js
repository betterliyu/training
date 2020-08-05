import React from 'react';
import TestUpdateContext from './TestUpdateContext';

export default class TestUpdate extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <p>context 值: {this.context} </p>
        <p>props 值: {this.props.data} </p>
      </div>
    );
  }
}

TestUpdate.contextType = TestUpdateContext;
