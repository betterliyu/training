import React from 'react';
import CounterA from './CounterA';
import CounterB from './CounterB';
import DataSource from './DataSource';
import CounterAWithLog from './TestMultiHOC';

export default function HOC(params) {
  return (
    <div>
      <h3>用来抽象相同功能的代码</h3>
      <button onClick={() => DataSource.increaseCount()}>点击修改 count </button>
      <CounterA />
      <CounterB />
      <h3>多个单参数高阶组件组合</h3>
      <p>控制台输出"这是首页传过来的 props"，同时可以点击修改值</p>
      <CounterAWithLog data="这是首页传过来的 props" />
    </div>
  );
}
