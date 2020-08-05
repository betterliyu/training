import React from 'react';

// 只有在 React.forwardRef 方法中，才能传递第二个参数 ref
export default React.forwardRef((props, refInParent) => {
  return <button ref={refInParent}>{props.children}</button>;
});
