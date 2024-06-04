import React from 'react';
import { mount } from 'enzyme';
// import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging', () => {
  it('logs mount and unmount events with "Component" for pure HTML', () => {
    const MockComponent = () => <p>Hello World</p>;
    const WrappedComponent = WithLogging(MockComponent);
    
    const consoleSpy = jest.spyOn(console, 'log');
    const wrapper = mount(<WrappedComponent />);
    
    // Check mount log
    expect(consoleSpy).toHaveBeenCalledWith('Component is mounted on componentDidMount()');

    // Unmount the component
    wrapper.unmount();
    
    // Check unmount log
    expect(consoleSpy).toHaveBeenCalledWith('Component is going to unmount on componentWillUnmount()');

    // Restore console.log
    consoleSpy.mockRestore();
  });

  it('logs mount and unmount events with the component name for Login component', () => {
    class Login extends React.Component {
      render() {
        return <div>Login Component</div>;
      }
    }
    const WrappedComponent = WithLogging(Login);
    
    const consoleSpy = jest.spyOn(console, 'log');
    const wrapper = mount(<WrappedComponent />);
    
    // Check mount log
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted on componentDidMount()');

    // Unmount the component
    wrapper.unmount();
    
    // Check unmount log
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount on componentWillUnmount()');

    // Restore console.log
    consoleSpy.mockRestore();
  });
});
