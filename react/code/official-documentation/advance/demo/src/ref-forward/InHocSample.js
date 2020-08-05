import React from 'react';
import FancyButtonHoc from './FancyButtonHoc';

export default (props) => {
  const ref = React.createRef();

  setTimeout(() => {
    if (ref && ref.current) {
      ref.current.style.color = 'red';
    }
  }, 5000);

  return (
    <div>
      <p>5 秒后字体颜色变成红色</p>
      <FancyButtonHoc ref={ref}>Click Me</FancyButtonHoc>
    </div>
  );
};
