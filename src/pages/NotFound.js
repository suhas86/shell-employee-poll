import { connect } from 'react-redux';
import NavBar from '../components/navbar/NavBar';

const NotFound = ({ user }) => {
  return (
    <>
      {user && <NavBar user={user} />}
      <div className="container">
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </>
  );
};
const mapStateToProps = ({ authedUser }) => ({
  user: authedUser.user,
});
export default connect(mapStateToProps)(NotFound);
