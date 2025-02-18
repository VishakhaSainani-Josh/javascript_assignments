import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "40px" }}>
      <ul style={{ display: "flex", justifyContent: "center" }}>
        <li style={{ listStyle: "none" }}>
          <Link to="/" style={{ margin: "30px" }}>
            Home
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link to="/todo" style={{ margin: "30px" }}>
            Add Todo
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link to="/todos" style={{ margin: "30px" }}>
            View all Todos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
