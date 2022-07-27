import { Link } from 'react-router-dom';
import QuestionItem from './QuestionItem';
import './QuestionList.css';

const QuestionList = ({ questions, heading }) => {
  return (
    <div className="question-list">
      <h2>{heading}</h2>
      <div>
        {questions.map((question) => (
          <Link key={question} to={`poll/${question}`}>
            <QuestionItem question={question} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
