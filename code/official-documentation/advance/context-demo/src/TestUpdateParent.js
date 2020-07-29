import React from 'react';
import TestUpdate from './TestUpdate';

export default class TestUpdateParent extends React.Component {
  shouldComponentUpdate() {
    // 即使这里阻止了由于 App 的 render 导致的渲染，TestUpdate 还是会更新，
    // 因为context变化引起的render不会受 shouldComponentUpdate 影响
    return true;
  }

  render() {
    return (
      <div>
        <TestUpdate data={this.props.data} />
      </div>
    );
  }
}
