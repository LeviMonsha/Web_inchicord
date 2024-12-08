import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
  const Navbar = () => {
    const { logout } = useAuth();

    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/reset">Reset password</Link>
          </li>
          <li>
            <Link to="/protected">Protected page</Link>
          </li>
          <li>
            <Link onClick={logout} style={{ cursor: "pointer" }}>
              Log out
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <header>
      <Navbar />
    </header>
  );
}
