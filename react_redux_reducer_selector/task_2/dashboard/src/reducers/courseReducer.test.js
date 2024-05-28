import courseReducer from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from './courseActionTypes';

describe('courseReducer', () => {
  it('should return the default state when no action is passed', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('should return the data passed when FETCH_COURSE_SUCCESS action is passed', () => {
    const courses = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];
    const state = courseReducer([], { type: FETCH_COURSE_SUCCESS, data: courses });
    expect(state).toEqual(courses);
  });

  it('should update the isSelected property when SELECT_COURSE action is passed', () => {
    const initialState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];
    const state = courseReducer(initialState, { type: SELECT_COURSE, courseId: 2 });
    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];
    expect(state).toEqual(expectedState);
  });

  it('should update the isSelected property when UNSELECT_COURSE action is passed', () => {
    const initialState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];
    const state = courseReducer(initialState, { type: UNSELECT_COURSE, courseId: 2 });
    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];
    expect(state).toEqual(expectedState);
  });
});