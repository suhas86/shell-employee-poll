import { useState } from 'react';
import { connect } from 'react-redux';
import QuestionList from '../components/questions/QuestionList';

const Dashboard = ({ newQuestionsIds, answeredQuestionsIds }) => {
  const [activeTab, setActiveTab] = useState('new');
  const getActiveTab = (tab) => {
    switch (activeTab) {
      case 'new':
        return (
          <QuestionList questions={newQuestionsIds} heading="New Questions" />
        );
      case 'done':
        return <QuestionList questions={answeredQuestionsIds} heading="Done" />;
      default:
        return (
          <>
            <QuestionList questions={newQuestionsIds} heading="New Questions" />
            <QuestionList questions={answeredQuestionsIds} heading="Done" />
          </>
        );
    }
  };
  return (
    <div className="container">
      <div>
        Switch View:
        <select onChange={(e) => setActiveTab(e.target.value)}>
          <option value="new">New Questions</option>
          <option value="done">Done</option>
          <option value="both">Both</option>
        </select>
      </div>
      {getActiveTab(activeTab)}
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
