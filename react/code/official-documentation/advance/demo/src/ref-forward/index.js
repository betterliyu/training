import React from 'react';
import RefForwardSample from './RefForwardSample';
import InHocSample from './InHocSample';

export default () => {
  return (
    <div>
      <p>Ref Forward Sample</p>
      <RefForwardSample />
      <hr />
      <p>In Hoc Sample</p>
      <InHocSample />
    </div>
  );
};
