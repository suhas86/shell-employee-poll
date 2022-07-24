import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleLogin } from '../actions/authedUser';

const Login = ({ dispatch, user, error }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === 'userId') {
      setUserId(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === '' || password === '') {
      setErrorMessage('Please enter an email and password.');
      return;
    }
    dispatch(handleLogin({ userId, password }));
  };
  return (
    <div className="login flex-center-container ">
      <h4>Enter your login id and password</h4>
      <form onSubmit={handleSubmit}>
        {errorMessage && (
          <p data-testid="error-message" className="error-message">
            {errorMessage}
          </p>
        )}
        <label>
          Login Id:
          <input
            name="userId"
            data-testid="userId"
            type="text"
            onChange={handleOnChange}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            data-testid="password"
            onChange={handleOnChange}
          />
        </label>
        <button type="submit" data-testid="login">
          Login
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = ({ authedUser }) => ({
  user: authedUser.user,
  error: authedUser.error,
});
export default connect(mapStateToProps)(Login);
