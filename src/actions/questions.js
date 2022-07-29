import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { _saveQuestion, _saveQuestionAnswer } from '../utils/api/_DATA';
import { addQuestionUser, receiveAnswerUser } from './users';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_ANSWER_QUESTION = 'ADD_ANSWER_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

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

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
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

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return _saveQuestion({
      author: authedUser.user.id,
      optionOneText,
      optionTwoText,
    }).then((res) => {
      console.log('-----res----------------', res);
      dispatch(addQuestion(res));
      dispatch(addQuestionUser(authedUser.user.id, res.id));
      dispatch(hideLoading());
    });
  };
}
