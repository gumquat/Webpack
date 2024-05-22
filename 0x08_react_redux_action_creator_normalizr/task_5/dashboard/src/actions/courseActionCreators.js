import { selectCourse, unSelectCourse } from './courseActionCreators';

describe('selectCourse', () => {
  it('should return the correct action object', () => {
    const expectedAction = { type: 'SELECT_COURSE', index: 1 };
    expect(selectCourse(1)).toEqual(expectedAction);
  });
});

describe('unSelectCourse', () => {
  it('should return the correct action object', () => {
    const expectedAction = { type: 'UNSELECT_COURSE', index: 1 };
    expect(unSelectCourse(1)).toEqual(expectedAction);
  });
});
