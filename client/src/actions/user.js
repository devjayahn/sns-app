export const LOGIN = 'LOGIN';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (user_id, password) => {
    return {
        type: LOGIN,
        promise: { method: 'post', url: 'http://localhost:5000/api/login', data: { user_id, password } }
    };
};