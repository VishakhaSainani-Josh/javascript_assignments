import { Link } from "react-router-dom";
import { useAuth } from "../Context/userContext";

const Navbar = () => {
  const { user, login, logout } = useAuth();

  return (
    <nav style={{ padding: "40px" }}>
      <ul style={{ display: "flex", justifyContent: "center" }}>
        <li style={{ listStyle: "none" }}>
          <Link to="/" style={{ margin: "30px" }}>
            Home
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          {user ? (
            <div>
              <button onClick={logout}>Logout</button>
              <Link to="/todo" style={{ margin: "30px" }}>
                Add Todo
              </Link>
              <Link to="/todos" style={{ margin: "30px" }}>
                View all Todos
              </Link>
            </div>
          ) : (
            <button onClick={login}>Login </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
