import { connect } from 'react-redux';
import { Navigate, useLocation } from 'react-router';

const ProtectedRoute = ({ children, user }) => {
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

const mapStateToProps = ({ authedUser }) => ({
  user: authedUser.user,
});

export default connect(mapStateToProps)(ProtectedRoute);
