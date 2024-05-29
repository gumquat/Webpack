import courseReducer from './courseReducer';
import { Map, fromJS } from 'immutable';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from './courseActionTypes';

describe('courseReducer', () => {
  it('should return the default state when no action is passed', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(Map());
  });

  it('should return the normalized data when FETCH_COURSE_SUCCESS action is passed', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const normalizedData = {
      entities: {
        courses: {
          '1': { id: 1, name: 'ES6', credit: 60, isSelected: false },
          '2': { id: 2, name: 'Webpack', credit: 20, isSelected: false },
          '3': { id: 3, name: 'React', credit: 40, isSelected: false },
        },
      },
      result: [1, 2, 3],
    };
    const state = courseReducer(Map(), { type: FETCH_COURSE_SUCCESS, data: courses });
    expect(state).toEqual(fromJS(normalizedData));
  });

  it('should update the isSelected property when SELECT_COURSE action is passed', () => {
    const initialState = fromJS({
      entities: {
        courses: {
          '1': { id: 1, name: 'ES6', credit: 60, isSelected: false },
          '2': { id: 2, name: 'Webpack', credit: 20, isSelected: false },
          '3': { id: 3, name: 'React', credit: 40, isSelected: false },
        },
      },
      result: [1, 2, 3],
    });
    const state = courseReducer(initialState, { type: SELECT_COURSE, courseId: 2 });
    const expectedState = fromJS({
      entities: {
        courses: {
          '1': { id: 1, name: 'ES6', credit: 60, isSelected: false },
          '2': { id: 2, name: 'Webpack', credit: 20, isSelected: true },
          '3': { id: 3, name: 'React', credit: 40, isSelected: false },
        },
      },
      result: [1, 2, 3],
    });
    expect(state).toEqual(expectedState);
  });

  it('should update the isSelected property when UNSELECT_COURSE action is passed', () => {
    const initialState = fromJS({
      entities: {
        courses: {
          '1': { id: 1, name: 'ES6', credit: 60, isSelected: false },
          '2': { id: 2, name: 'Webpack', credit: 20, isSelected: true },
          '3': { id: 3, name: 'React', credit: 40, isSelected: false },
        },
      },
      result: [1, 2, 3],
    });
    const state = courseReducer(initialState, { type: UNSELECT_COURSE, courseId: 2 });
    const expectedState = fromJS({
      entities: {
        courses: {
          '1': { id: 1, name: 'ES6', credit: 60, isSelected: false },
          '2': { id: 2, name: 'Webpack', credit: 20, isSelected: false },
          '3': { id: 3, name: 'React', credit: 40, isSelected: false },
        },
      },
      result: [1, 2, 3],
    });
    expect(state).toEqual(expectedState);
  });
});