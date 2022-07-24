import { SET_AUTHED_USER, SET_AUTHED_USER_ERROR } from '../actions/authedUser';

export default function authedUser(
  state = { user: null, error: null },
  action
) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        user: action.user,
        error: null,
      };
    case SET_AUTHED_USER_ERROR:
      return {
        user: null,
        error: action.error,
      };
    default:
      return state;
  }
}
