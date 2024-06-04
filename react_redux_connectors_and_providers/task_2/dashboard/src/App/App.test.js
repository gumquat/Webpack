import React from 'react';
import { shallow } from 'enzyme';
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

  it('should return the correct object when isUserLoggedIn and isNotificationDrawerVisible are true', () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: true,
    });

    const expected = { isLoggedIn: true, displayDrawer: true };
    const result = mapStateToProps(state);

    expect(result).toEqual(expected);
  });

  it('should return the correct object when isUserLoggedIn and isNotificationDrawerVisible are false', () => {
    const state = fromJS({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: false,
    });

    const expected = { isLoggedIn: false, displayDrawer: false };
    const result = mapStateToProps(state);

    expect(result).toEqual(expected);
  });
});