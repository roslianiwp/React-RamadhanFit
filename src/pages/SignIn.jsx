import React, { Component } from "react";
// import Navigation from "../components/NavigationBar";
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
    console.warn("cek props dari page signin", this.props);
    return (
      <div>
        {/* <Navigation {...this.props} /> */}
        <div className="d-flex justify-content-center text-center">
          <section className="content">
            <div className="container text-center justify-content-center signin mt-5">
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
                      id="button"
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
                      id="button"
                      placeholder="Password"
                      name="kataKunci"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary mr-3"
                    id="button"
                    onClick={() => this.postLogin()}
                  >
                    Sign In
                  </button>
                </form>
              </form>
            </div>
          </section>
        </div>
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
