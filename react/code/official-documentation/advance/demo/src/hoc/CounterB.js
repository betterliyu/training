// eslint-disable-next-line no-unused-vars
import React from 'react';
import withSubscription from './withSubscription';

function CounterB(props) {
  return (
    <div>
      <span>在组件 B 中: </span>
      {props.count}
    </div>
  );
}

export default withSubscription(CounterB);
