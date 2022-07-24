import { _getUsers } from '../utils/api/_DATA';
export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const SET_AUTHED_USER_ERROR = 'SET_AUTHED_USER_ERROR';

function setAuthedUser(user) {
  return {
    type: SET_AUTHED_USER,
    user,
  };
}

function setAuthedUserError(error) {
  return {
    type: SET_AUTHED_USER_ERROR,
    error,
  };
}

export function handleLogin(user) {
  return (dispatch) => {
    return _getUsers()
      .then((users) => {
        const authedUser = users[user.userId];
        if (authedUser && authedUser.password === user.password) {
          dispatch(
            setAuthedUser({
              name: authedUser.name,
              id: authedUser.id,
              avatarURL: authedUser.avatarURL,
            })
          );
        } else {
          console.log('Else block');
          dispatch(setAuthedUserError('Incorrect username or password'));
        }
      })
      .catch((e) => {
        dispatch(setAuthedUserError('Error logging in'));
      });
  };
}
