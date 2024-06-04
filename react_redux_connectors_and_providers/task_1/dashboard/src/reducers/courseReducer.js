// courseReducer.js
import { Map, fromJS } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map();

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const normalizedData = coursesNormalizer(action.data);
      return state.mergeDeep(fromJS(normalizedData.entities));
    }
    case SELECT_COURSE:
      return state.setIn(['courses', action.courseId, 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn(['courses', action.courseId, 'isSelected'], false);
    default:
      return state;
  }
};

export default courseReducer;