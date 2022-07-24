import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li data-testid="home">Home</li>
        <li data-testid="leaderboard">Leaderboard</li>
        <li data-testid="new">New</li>
      </ul>
    </nav>
  );
};

export default NavBar;
