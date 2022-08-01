import { connect } from 'react-redux';
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { handleAnswerQuestion } from '../actions/questions';
import OptionCard from '../components/optionCard/OptionCard';

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const calculateNumberOfVotes = (option, question) => {
  return question[option].votes.length;
};

const calculatePercentage = (option, question, numberOfUsers) => {
  const numberOfVotes = calculateNumberOfVotes(option, question);
  return (numberOfVotes / numberOfUsers) * 100;
};

const Question = (props) => {
  const { id, question, authedUserId, numberOfUsers } = props;
  if (!question) {
    return <Navigate to="/404" />;
  }
  const onQuestionSelected = (option) => {
    const { dispatch } = props;
    dispatch(handleAnswerQuestion(authedUserId, id, option));
  };

  const optionOneVoted = question.optionOne.votes.includes(authedUserId);
  const optionTwoVoted = question.optionTwo.votes.includes(authedUserId);
  const voted = optionOneVoted || optionTwoVoted;

  return (
    <div className="container">
      <img src="https://i.pravatar.cc/150?img=1" alt="name" />
      <h1>{question.author} asks would you rather:</h1>
      <div className="flex-row-container">
        <OptionCard
          onClick={() => onQuestionSelected('optionOne')}
          option={question.optionOne.text}
          voted={voted}
          isMarkAnswer={optionOneVoted}
        />
        <OptionCard
          onClick={() => onQuestionSelected('optionTwo')}
          option={question.optionTwo.text}
          voted={voted}
          isMarkAnswer={optionTwoVoted}
        />
      </div>
      {voted && (
        <div className="container">
          <h4>
            You voted for option {optionOneVoted ? 'Option One' : 'Option Two'}
          </h4>
          <p>
            People who voted for this option:{' '}
            {calculateNumberOfVotes(
              optionOneVoted ? 'optionOne' : 'optionTwo',
              question
            )}
          </p>
          <p>
            Vote percentage:{' '}
            {calculatePercentage(
              optionOneVoted ? 'optionOne' : 'optionTwo',
              question,
              numberOfUsers
            )}
          </p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.router.params;

  return {
    id,
    question: questions[id],
    authedUserId: authedUser.user.id,
    numberOfUsers: Object.keys(users).length,
  };
};

export default withRouter(connect(mapStateToProps)(Question));
