import React from 'react';
import DataSource from './DataSource';

const withSubscription = (Component) => {
  class WithSubscription extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: DataSource.getCount(),
      };
    }
    componentDidMount() {
      // ...负责订阅相关的操作...
      DataSource.addListener('COUNT_INCREASE', this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeListener('COUNT_INCREASE', this.handleChange);
    }

    handleChange = () => {
      this.setState({
        count: DataSource.getCount(),
      });
    };

    render() {
      return <Component count={this.state.count} {...this.props} />;
    }
  }

  return WithSubscription;
};

export default withSubscription;
