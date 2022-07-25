import { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import QuestionList from '../components/questions/QuestionList';

const Dashboard = ({ dispatch, newQuestionsIds, answeredQuestionsIds }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div className="container">
      <QuestionList questions={newQuestionsIds} heading="New Questions" />
      <QuestionList questions={answeredQuestionsIds} heading="Done" />
    </div>
  );
};
const mapStateToProps = ({ authedUser, users, questions }) => ({
  newQuestionsIds: Object.keys(questions)
    .filter(
      (question) =>
        questions[question].author !== authedUser.user.id &&
        !users[authedUser.user.id].answers[question]
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  answeredQuestionsIds: users[authedUser.user.id]
    ? Object.keys(users[authedUser.user.id].answers)
    : [],
});
export default connect(mapStateToProps)(Dashboard);
