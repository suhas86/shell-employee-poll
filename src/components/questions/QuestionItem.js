import { connect } from 'react-redux';
import './QuestionItem.css';

const QuestionItem = ({ questionItem }) => {
  return (
    <div className="question-item">
      <p>{questionItem.author}</p>
      <span>{new Date(questionItem.timestamp).toDateString()}</span>
    </div>
  );
};
const mapStateToProps = ({ questions }, { question }) => {
  return {
    questionItem: questions[question],
  };
};
export default connect(mapStateToProps)(QuestionItem);
