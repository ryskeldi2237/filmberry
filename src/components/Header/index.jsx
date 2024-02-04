import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { signOutAsync } from "../../store/slices/authSlice";
import { CiLogin, CiLogout } from "react-icons/ci";
import logo from "../../assets/img/logo.png";
import "./header.sass";

function Header() {
  const auth = getAuth();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [name, setName] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const authState = localStorage.getItem("authState");
    if (authState) {
      const parsedAuthState = JSON.parse(authState);
      setName(parsedAuthState.user);
    } else {
      setName(null);
    }
  }, [auth, user]);

  const handleSignOut = () => {
    dispatch(signOutAsync());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/">
            <img src={logo} alt="logo" className="header__logo" />
          </Link>
          <ul className="header__items">
            <NavItem to="/" label="Home" active={location.pathname === "/"} />
            <NavItem
              to="/store"
              label="Store"
              active={location.pathname === "/store"}
            />
          </ul>
          <div className="header__nav">
            {name ? (
              <div className="header__wrap" onClick={handleSignOut}>
                <div>{name}</div>
                <CiLogout />
              </div>
            ) : (
              <Link to="/login" className="header__wrap">
                <div>Sign In</div>
                <CiLogin />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

const NavItem = ({ to, label, active }) => (
  <Link to={to}>
    <li className={`header__item ${active ? "active" : ""}`}>{label}</li>
  </Link>
);

export default Header;
