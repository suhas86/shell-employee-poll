import { connect } from 'react-redux';

const Leaderboard = ({ users }) => {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(users).map((user) => (
            <tr key={user}>
              <td>
                <div className="user-container">
                  <img src={users[user].avatarURL} alt={users[user].name} />
                  <div>
                    <h3>{users[user].name}</h3>
                    <span>{user}</span>
                  </div>
                </div>
              </td>
              <td>{Object.keys(users[user].answers).length}</td>
              <td>{users[user].questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};
export default connect(mapStateToProps)(Leaderboard);
