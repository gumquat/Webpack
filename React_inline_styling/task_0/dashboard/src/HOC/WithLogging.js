import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is mounted on componentDidMount()`);
    }

    componentWillUnmount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount on componentWillUnmount()`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Function to get the display name of the wrapped component
const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default WithLogging;

// to use, wrap your component with it:
// example:
// export default WithLogging(MyComponent);