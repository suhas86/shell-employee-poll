import { ADD_ANSWER_USER, RECEIVE_USERS } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER_USER:
      return {
        ...state,
        [action.authedUserId]: {
          ...state[action.authedUserId],
          answers: {
            ...state[action.authedUserId].answers,
            [action.qid]: action.answer,
          },
        },
      };
    default:
      return state;
  }
}
