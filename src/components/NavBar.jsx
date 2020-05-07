import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { doSignOut } from "../store/action/actionUser";

const Navigation = (props, postSignout) => {
  postSignout = () => {
    props.doSignOut();
    props.history.push("/");
  };
  const login = props.login;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            className="App-logo"
            src={require("../images/ramadhan.jpeg")}
            alt="logokabar"
            id="logokabar"
          ></img>
          Ramadhan Fit
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/food">
                Food Nutrient<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sport">
                Sport Fast <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                href=""
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                UpToDate Ramadhan Food
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" href="" to="/iftar">
                  Iftar
                </Link>
                <Link class="dropdown-item" href="/sahur">
                  Sahur
                </Link>
              </div>
            </li>
            {login ? (
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/signin"
                    onClick={() => postSignout()}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/signin">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    login: state.user.is_login,
  };
};
const mapDispatchToProps = {
  doSignOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
