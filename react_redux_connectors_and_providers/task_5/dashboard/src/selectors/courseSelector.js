import { Map } from 'immutable';

const getCourseEntities = (state) => {
  const courses = state.getIn(['courses', 'entities'], Map());
  return courses.valueSeq();
};

export default getCourseEntities;
