import { users } from '../../config/fakedb';

const loginStart = () => {
  return {
    type: 'LOGIN_START',
    payload: {}
  };
};

const loginSuccess = (status, username) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: { status: status, username: username }
  };
};

const loginError = err => {
  return {
    type: 'LOGIN_ERROR',
    payload: { error: err }
  };
};

export const login = (username, password) => dispatch => {
  dispatch(loginStart());
  const rs = users.filter(user => {
    user.username === username && user.password === password;
  });
  if (rs.length > 0) {
    if (rs[0].status === 'admin') {
      dispatch(loginSuccess(rs[0].status, rs[0].username));
    } else if (rs[0].status === 'user') {
      dispatch(loginSuccess(rs[0].status, rs[0].username));
    }
  } else {
    dispatch(loginError('No user found or password does not match'));
  }
};
