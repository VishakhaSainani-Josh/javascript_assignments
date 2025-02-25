import { Link } from "react-router-dom";
import { useAuth } from "../Context/userContext";
import '../App.css';

const Navbar = () => {
  const { user, login, logout } = useAuth();

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          {user ? (
            <div className="auth-section">
              <button className="auth-button" onClick={logout}>Logout</button>
              <Link to="/todo" className="nav-link">Add Todo</Link>
              <Link to="/todos" className="nav-link">View all Todos</Link>
            </div>
          ) : (
            <button className="auth-button" onClick={login}>Login</button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
