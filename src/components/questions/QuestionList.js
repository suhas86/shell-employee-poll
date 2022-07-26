import { Link } from 'react-router-dom';
import QuestionItem from './QuestionItem';
import './QuestionList.css';

const QuestionList = ({ questions, heading }) => {
  return (
    <div className="question-list">
      <h2>{heading}</h2>
      <div>
        {questions.map((question) => (
          <Link to={`poll/${question}`}>
            <QuestionItem key={question} question={question} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
