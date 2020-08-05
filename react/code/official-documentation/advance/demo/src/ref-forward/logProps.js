import React from 'react';

export default (Componet) => {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;
      return <Componet ref={forwardedRef} {...rest}></Componet>;
    }
  }

  // return LogProps;

  // 不使用转发， ref 无法传递给 forwardedRef
  return React.forwardRef((props, ref) => {
    return <LogProps forwardedRef={ref} {...props}></LogProps>;
  });
};
