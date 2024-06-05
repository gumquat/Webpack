import { Map, fromJS } from 'immutable';
import { getCourseEntities } from './courseSelector';

describe('getCourseEntities', () => {
  it('should return an empty List if there are no courses', () => {
    const state = fromJS({
      courses: {
        entities: {},
        result: [],
      },
    });

    const courseEntities = getCourseEntities(state);
    expect(courseEntities.size).toBe(0);
  });

  it('should return a List of course entities', () => {
    const courses = {
      '1': { id: 1, name: 'ES6', credit: 60 },
      '2': { id: 2, name: 'Webpack', credit: 20 },
      '3': { id: 3, name: 'React', credit: 40 },
    };

    const state = fromJS({
      courses: {
        entities: courses,
        result: Object.keys(courses),
      },
    });

    const courseEntities = getCourseEntities(state);
    expect(courseEntities.size).toBe(3);
    expect(courseEntities.toJS()).toEqual(Object.values(courses));
  });
});