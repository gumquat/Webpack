import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

////////////////DEAD TESTS//////////////////
///////////////////////////////////////////
// describe('CourseList component', () => {
//   it('renders CourseList component without crashing', () => {
//     shallow(<CourseList />);
//   });

//   it('renders the 5 different rows', () => {
//     const wrapper = shallow(<CourseList />);

    // // Check for the header rows
    // expect(wrapper.find('thead').find(CourseListRow)).toHaveLength(2);

    // // Check for the data rows
    // expect(wrapper.find('tbody').find(CourseListRow)).toHaveLength(3);

    // this should do the same thing as the two lines above, by using .length).toBe(5)
//     expect(wrapper.find('CourseListRow').length).toBe(5);
//   });
// });

describe('CourseList component', () => {
  it('renders without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders the 5 different rows', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(5); // Header row + 3 course rows
  });

  // New test for empty or missing listCourses
  it('renders correctly if listCourses is empty or not provided', () => {
    const wrapper = shallow(<CourseList />);
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(2); // Header row + row for "No course available yet"
    expect(rows.at(1).prop('textFirstCell')).toBe('No course available yet');
  });

  // New test for non-empty listCourses
  it('renders the correct number of course rows when listCourses is provided', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(4); // Header row + 3 course rows
  });
});