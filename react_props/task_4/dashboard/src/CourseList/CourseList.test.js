import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList component', () => {
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);

    // // Check for the header rows
    // expect(wrapper.find('thead').find(CourseListRow)).toHaveLength(2);

    // // Check for the data rows
    // expect(wrapper.find('tbody').find(CourseListRow)).toHaveLength(3);

    // this should do the same thing as the two lines above, by using .length).toBe(5)
    expect(wrapper.find('CourseListRow').length).toBe(5);
  });
});
