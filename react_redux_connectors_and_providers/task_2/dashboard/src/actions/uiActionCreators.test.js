import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest, login, loginSuccess, loginFailure } from './uiActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should dispatch LOGIN and LOGIN_SUCCESS on successful API call', () => {
    const mockUser = { email: 'test@example.com', password: 'password123' };
    fetchMock.getOnce('/login-success.json', { body: mockUser, headers: { 'content-type': 'application/json' } });

    const expectedActions = [
      login('test@example.com', 'password123'),
      loginSuccess(mockUser),
    ];

    const store = mockStore();

    return store.dispatch(loginRequest('test@example.com', 'password123')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch LOGIN and LOGIN_FAILURE on failed API call', () => {
    const errorMessage = 'Failed to fetch';
    fetchMock.get('/login-success.json', { throws: new Error(errorMessage) });

    const expectedActions = [
      login('test@example.com', 'password123'),
      loginFailure(new Error(errorMessage)),
    ];

    const store = mockStore();

    return store.dispatch(loginRequest('test@example.com', 'password123')).catch(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});