import React, { Component } from "react";
import Navigation from "../components/NavBar";
import FooterBar from "../components/Footer";
import { connect } from "react-redux";
import { doLogin, changeInputUser } from "../store/action/actionUser";
import "../css/SignIn.css";
class SignIn extends Component {
  // untuk meredirect ke halaman profile apabila telah login
  postLogin = async () => {
    await this.props.doLogin();
    const is_login = this.props.login;
    if (is_login) {
      this.props.history.push("/profile");
    }
  };

  render() {
    const message = this.props.location.state
      ? this.props.location.state.message
      : "Ayo peduli kesehatanmu!";
    console.warn("cek props dari page signin", this.props);
    return (
      <div>
        <Navigation {...this.props} />
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <section className="content">
                  <div className="row">
                    <div className="col-sm-12">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <img
                          src={require("../images/logo.jpg")}
                          alt="logokabar"
                          id="logokabar"
                        ></img>
                        <h4>Member Login</h4>
                        <form>
                          <div className="form-group">
                            <input
                              className="form-control"
                              id="button-form"
                              aria-describedby="emailHelp"
                              type="text"
                              name="namaPengguna"
                              placeholder="Username"
                              onChange={(e) => this.props.changeInput(e)}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              id="button-form"
                              placeholder="Password"
                              name="kataKunci"
                              onChange={(e) => this.props.changeInput(e)}
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary badge-pill mr-3 mb-3"
                            id="button"
                            onClick={() => this.postLogin()}
                          >
                            Sign In
                          </button>
                        </form>
                      </form>
                      <p style={{ color: "red" }}>{message}</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <FooterBar />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    namaPengguna: state.user.namaPengguna,
    kataKunci: state.user.kataKunci,
    login: state.user.is_login,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doLogin: doLogin,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
