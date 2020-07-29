import React from 'react';
import TestUpdateContext from './TestUpdateContext';

export default class TestUpdate extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        {this.context}|{this.props.data}
      </div>
    );
  }
}

TestUpdate.contextType = TestUpdateContext;
