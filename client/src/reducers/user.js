import { combineReducers } from 'redux';
import { login, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/user.js';

const defaultState = {
  isLoggedIn: false,
  fetchingUpdate: false,
  user: {}
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        fetchingUpdate: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        fetchingUpdate: false,
        isLoggedIn: true,
        user: action.result,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        fetchingUpdate: false
      };
  }
};

export default combineReducers({
  user: userReducer
});