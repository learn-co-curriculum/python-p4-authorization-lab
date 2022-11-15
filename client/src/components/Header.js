import { Link } from "react-router-dom";

function Header({ user, onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <header>
      <h1>
        <Link to="/">Lorem Blogum</Link>
      </h1>
      <p>
        <Link to="/members">Click here for exclusive member-only content!</Link>
      </p>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Click Here to Login</Link>
      )}
    </header>
  );
}

export default Header;
