import QuestionItem from './QuestionItem';
import './QuestionList.css';

const QuestionList = ({ questions, heading }) => {
  return (
    <div className="question-list">
      <h2>{heading}</h2>
      <div>
        {questions.map((question) => (
          <QuestionItem key={question} question={question} />
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
