import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
  const { id, question, authedUser } = props;
  return (
    <div className="container">
      <img src="https://i.pravatar.cc/150?img=1" alt="name" />
      <h1>{question.author} asks would you rather:</h1>
      <div className="flex-row-container">
        <OptionCard option={question.optionOne.text} />
        <OptionCard option={question.optionTwo.text} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.router.params;

  return {
    id,
    question: questions[id],
    authedUser,
  };
};

export default withRouter(connect(mapStateToProps)(Poll));
