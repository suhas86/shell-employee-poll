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
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="user-container">
                  <img src={user.avatarURL} alt={user.name} />
                  <div>
                    <h3>{user.name}</h3>
                    <span>{user.id}</span>
                  </div>
                </div>
              </td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{user.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users).sort(
      (a, b) =>
        Object.keys(b.answers).length +
        b.questions.length -
        (Object.keys(a.answers).length + a.questions.length)
    ),
  };
};
export default connect(mapStateToProps)(Leaderboard);
