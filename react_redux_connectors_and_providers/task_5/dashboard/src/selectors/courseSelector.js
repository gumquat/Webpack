import { Map } from 'immutable';

export const getCourseEntities = (state) => {
  const courses = state.getIn(['courses', 'entities'], Map());
  return courses.valueSeq();
};