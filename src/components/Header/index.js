import { Link, NavLink } from "react-router-dom";
import "./index.css";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/userSlice";

const Header = () => {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="main-header">
      <img src="https://logowik.com/content/uploads/images/106_facebook.jpg" alt="App Logo" className="app-logo" />
      {user ? (
        <div className="links-container">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/my-posts"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            My Posts
          </NavLink>
          <NavLink
            to="/create-post"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Create Post
          </NavLink>
          <NavLink
            to="/friends"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Friends
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Profile
          </NavLink>
          <Button onClick={handleLogOut}>Log Out</Button>
        </div>
      ) : (
        <div className="login-signup-button">
          <Link to="/login">
            <Button>Login</Button>
          </Link>
          <Link to="/signup">
            <Button type="primary">Sign Up</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
