import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { doSignOut } from "../store/action/actionUser";
import "../css/navbar.css";

// INI HARUS DIBIKIN STATELESS!!!!!
const Navigation = (props, postSignout) => {
  const changeRouter = async (keyword) => {
    if (props.handleRouter) {
      props.handleRouter(keyword);
    } else {
      props.history.replace("/news-keyword/" + keyword);
    }
  };

  postSignout = () => {
    props.doSignOut();
    if (!props.login) {
      props.history.push("/");
    }
  };

  const login = props.login;
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-primary"
        id="shadow-box-navbar"
      >
        <Link className="navbar-brand" to="/">
          <img
            src={require("../images/kareem.jpg")}
            alt="logokabar"
            id="logokabar"
          ></img>
          Ramadhan Fit
        </Link>
        <button
          className="navbar-toggler navbar-light"
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
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nutrient">
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
                <Link
                  class="dropdown-item"
                  href=""
                  onClick={() => changeRouter("resep buka")}
                >
                  Iftar & Sahur
                </Link>
                <Link
                  class="dropdown-item"
                  onClick={() => changeRouter("puasa sehat")}
                >
                  Suggestions
                </Link>
              </div>
            </li>
          </ul>
          {login ? (
            <ul className="navbar-nav  ml-auto mx-5 py-5">
              <li class="nav-item dropleft">
                <Link
                  class="nav-link dropdown-toggle profil-drop"
                  href=""
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  Profil
                </Link>
                <div
                  className="dropdown-menu bg-warning"
                  aria-labelledby="navbarDropdown"
                  id="dropdown-box"
                >
                  <Link
                    class="dropdown-item d-flex justify-content-center"
                    to="/profile"
                  >
                    <img
                      src={props.dataUser.avatar}
                      alt="gambar-profil"
                      className="gambar-profil "
                    />
                  </Link>
                  <Link class="dropdown-item" to="/profile">
                    Name : {props.dataUser.name}
                  </Link>
                  <Link class="dropdown-item" to="/profile">
                    Email : {props.dataUser.email}
                  </Link>
                </div>
              </li>
              <li className="nav-item ">
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
            <ul className="navbar-nav ml-auto mx-5 px-5">
              <li className="nav-item">
                <Link className="nav-link login" to="/signin">
                  Login
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    login: state.user.is_login,
    dataUser: state.user,
  };
};
const mapDispatchToProps = {
  doSignOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
