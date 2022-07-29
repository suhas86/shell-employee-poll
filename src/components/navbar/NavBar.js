import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.css';
import { resetAuthedUser } from '../../actions/authedUser';

const NavBar = ({ user, dispatch }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" data-testid="home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="leaderboard" data-testid="leaderboard">
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to="new" data-testid="new">
            New
          </NavLink>
        </li>
      </ul>
      <div className="image-wrapper">
        <img src={user.avatarURL} alt={user.name} />
        <NavLink
          to="/"
          data-testid="new"
          onClick={() => dispatch(resetAuthedUser())}
        >
          Logout
        </NavLink>
      </div>
    </nav>
  );
};
const mapStateToProps = ({ authedUser }) => ({
  user: authedUser.user,
});
export default connect(mapStateToProps)(NavBar);
