import { combineReducers } from 'redux';

const courseReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COURSE':
      return [...state, action.payload];
    case 'REMOVE_COURSE':
      return state.filter(course => course.id !== action.payload.id);
    default:
      return state;
  }
};

export default combineReducers({
  courseReducer
});
