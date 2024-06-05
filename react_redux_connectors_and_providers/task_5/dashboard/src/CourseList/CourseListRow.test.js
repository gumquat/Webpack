import React from 'react';
import { shallow, mount } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { fetchCourses, selectCourse, unSelectCourse } from './courseActionCreators';

describe('CourseList', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should fetch courses on component mount', () => {
    const fetchCoursesSpy = jest.spyOn(CourseList.prototype, 'componentDidMount');
    shallow(<CourseList fetchCourses={fetchCourses} />);
    expect(fetchCoursesSpy).toHaveBeenCalled();
    fetchCoursesSpy.mockRestore();
  });

  it('should dispatch selectCourse action when onChangeRow is called with checked=true', () => {
    const selectCourseSpy = jest.spyOn(CourseList.prototype, 'selectCourse');
    const wrapper = mount(<CourseList selectCourse={selectCourseSpy} />);
    const courseListRow = wrapper.find(CourseListRow).first();
    courseListRow.prop('onChangeRow')(1, true);
    expect(selectCourseSpy).toHaveBeenCalledWith(1);
    selectCourseSpy.mockRestore();
  });

  it('should dispatch unSelectCourse action when onChangeRow is called with checked=false', () => {
    const unSelectCourseSpy = jest.spyOn(CourseList.prototype, 'unSelectCourse');
    const wrapper = mount(<CourseList unSelectCourse={unSelectCourseSpy} />);
    const courseListRow = wrapper.find(CourseListRow).first();
    courseListRow.prop('onChangeRow')(2, false);
    expect(unSelectCourseSpy).toHaveBeenCalledWith(2);
    unSelectCourseSpy.mockRestore();
  });
});