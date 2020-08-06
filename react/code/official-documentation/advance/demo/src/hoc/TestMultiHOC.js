// eslint-disable-next-line no-unused-vars
import React from 'react';
import withSubscription from './withSubscription';
import logProps from './logProps';
import { flowRight } from 'lodash';

function TestMultiHOC(props) {
  return (
    <div>
      <span>在组件 A 中: </span>
      {props.count}
    </div>
  );
}

// 不建议嵌套
// export default withSubscription(logProps(CounterA));

export default flowRight(logProps, withSubscription)(TestMultiHOC);
