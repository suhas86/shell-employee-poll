import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
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
    </nav>
  );
};

export default NavBar;
