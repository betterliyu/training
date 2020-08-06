// eslint-disable-next-line no-unused-vars
import React from 'react';
import withSubscription from './withSubscription';

function CounterA(props) {
  return (
    <div>
      <span>在组件 A 中: </span>
      {props.count}
    </div>
  );
}

export default withSubscription(CounterA);
