import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { _saveQuestionAnswer } from '../utils/api/_DATA';
import { receiveAnswerUser } from './users';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_ANSWER_QUESTION = 'ADD_ANSWER_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function receiveaAnswerQuestion(authedUserId, qid, answer) {
  return {
    type: ADD_ANSWER_QUESTION,
    authedUserId,
    qid,
    answer,
  };
}

export function handleAnswerQuestion(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(showLoading());
    console.log(authedUser, qid, answer);
    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(receiveaAnswerQuestion(authedUser, qid, answer));
      dispatch(receiveAnswerUser(authedUser, qid, answer));
      dispatch(hideLoading());
    });
  };
}
