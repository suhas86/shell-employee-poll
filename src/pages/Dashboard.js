import { connect } from 'react-redux';
import QuestionList from '../components/questions/QuestionList';

const Dashboard = ({ newQuestionsIds, answeredQuestionsIds }) => {
  return (
    <div className="container">
      <QuestionList questions={newQuestionsIds} heading="New Questions" />
      <QuestionList questions={answeredQuestionsIds} heading="Done" />
    </div>
  );
};
const mapStateToProps = ({ authedUser, users, questions }) => ({
  newQuestionsIds: Object.keys(questions)
    .filter((question) => !users[authedUser.user.id].answers[question])
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  answeredQuestionsIds: Object.keys(users[authedUser.user.id].answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
});
export default connect(mapStateToProps)(Dashboard);
