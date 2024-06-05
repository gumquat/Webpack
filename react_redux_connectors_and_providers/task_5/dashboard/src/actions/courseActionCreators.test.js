import * as actions from './courseActionCreators';
import fetchMock from 'fetch-mock';
import courses from '../dist/courses.json';

describe('fetchCourses', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should create the correct action when the fetch is successful', () => {
    fetchMock.getOnce('/dist/courses.json', {
      body: courses,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: 'SET_COURSES', courses },
    ];

    const store = mockStore({ courses: [] });

    return store.dispatch(actions.fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});