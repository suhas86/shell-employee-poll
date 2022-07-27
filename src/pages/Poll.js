import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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

const Poll = (props) => {
  const { id, question, authedUserId } = props;
  const onPollSelected = (option) => {
    const { dispatch } = props;
    dispatch(handleAnswerQuestion(authedUserId, id, option));
  };
  return (
    <div className="container">
      <img src="https://i.pravatar.cc/150?img=1" alt="name" />
      <h1>{question.author} asks would you rather:</h1>
      <div className="flex-row-container">
        <OptionCard
          onClick={() => onPollSelected('optionOne')}
          option={question.optionOne.text}
        />
        <OptionCard
          onClick={() => onPollSelected('optionTwo')}
          option={question.optionTwo.text}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.router.params;

  return {
    id,
    question: questions[id],
    authedUserId: authedUser.user.id,
  };
};

export default withRouter(connect(mapStateToProps)(Poll));
