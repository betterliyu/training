import React from 'react';

const logProps = (Component) => {
  class LogProps extends React.Component {
    componentDidMount() {
      console.log('next props: ', this.props.data);
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return LogProps;
};

export default logProps;
