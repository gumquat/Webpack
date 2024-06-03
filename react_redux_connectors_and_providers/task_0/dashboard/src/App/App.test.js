import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

describe('App', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(true);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('does not render CourseList when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  describe('when isLoggedIn is true', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App isLoggedIn={true} />);
    });

    it('does not render Login component', () => {
      expect(wrapper.find(Login).length).toBe(0);
    });

    it('renders CourseList component', () => {
      expect(wrapper.find(CourseList).length).toBe(1);
    });
  });

  it('calls logOut and alert when ctrl+h is pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const wrapper = mount(<App logOut={logOutMock} />);

    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    window.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    alertMock.mockRestore();
    wrapper.unmount();
  });

  // New tests BELOW //

  it('should have default state for displayDrawer as false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('should update state to true after calling handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('should update state to false after calling handleHideDrawer', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });


 // NEW tests below //
  it('updates user state correctly when logIn is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password');
    expect(wrapper.state('user').isLoggedIn).toBe(true);
    expect(wrapper.state('user').email).toBe('test@example.com');
});

  it('updates user state correctly when logOut is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password');
    expect(wrapper.state('user').isLoggedIn).toBe(true);

    wrapper.instance().logOut();
    expect(wrapper.state('user').isLoggedIn).toBe(false);
  })

  // NEW tests //
  it('removes the notification from listNotifications when markNotificationAsRead is called', () => {
    const wrapper = shallow(<App />);
    const initialNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];
    wrapper.setState({ listNotifications: initialNotifications });

    wrapper.instance().markNotificationAsRead(2);
    const expectedNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];
    expect(wrapper.state('listNotifications')).toEqual(expectedNotifications);
  });
    
  describe('mapStateToProps', () => {
    it('should return the correct object when isUserLoggedIn is true', () => {
      const state = fromJS({
        isUserLoggedIn: true,
      });
  
      const expected = { isLoggedIn: true };
      const result = mapStateToProps(state);
  
      expect(result).toEqual(expected);
    });
  });

});