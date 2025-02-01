import { Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/main">
          <img src="/free.png" alt="" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/favourites" className="text-blue-500 hover:underline">
          Избранное
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/profile">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="profile-pic"
          />
        </Link>
        <Link to="/login" className="login-link">
          Login
        </Link>
      </div>
    </nav>
  );
};

