import {
  ADD_ANSWER_USER,
  ADD_QUESTION_USER,
  RECEIVE_USERS,
} from '../actions/users';

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
    case ADD_QUESTION_USER:
      return {
        ...state,
        [action.authedUserId]: {
          ...state[action.authedUserId],
          questions: state[action.authedUserId].questions.concat([
            action.questionId,
          ]),
        },
      };
    default:
      return state;
  }
}
