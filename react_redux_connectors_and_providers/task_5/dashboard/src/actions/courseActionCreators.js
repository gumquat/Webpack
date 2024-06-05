import { SELECT_COURSE, UNSELECT_COURSE, SET_COURSES } from './courseActionTypes';
import { useDispatch } from 'react-redux';
import courses from '../dist/courses.json';

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

export const setCourses = (courses) => ({
  type: SET_COURSES,
  courses,
});

export const fetchCourses = () => {
  return (dispatch) => {
    fetch('/dist/courses.json')
      .then(response => response.json())
      .then(data => {
        dispatch(setCourses(data));
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  };
};

export const bindCourseActionCreators = (dispatch) => ({
  boundSelectCourse: (index) => dispatch(selectCourse(index)),
  boundUnselectCourse: (index) => dispatch(unSelectCourse(index)),
  boundFetchCourses: () => dispatch(fetchCourses()),
});