import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navigation from "../components/NavBar";
import { connect } from "react-redux";
import "../css/Profile.css";
import FooterBar from "../components/Footer";

class Profile extends Component {
  // untuk meredirect ke halaman signin apabila belum login
  render() {
    if (!this.props.dataUser.is_login) {
      return <Redirect to={{ pathname: "/" }} />;
    } else {
      return (
        <div>
          <Navigation
            login={this.props.login}
            avatar={this.props.dataUser.avatar}
            name={this.props.dataUser.name}
            email={this.props.dataUser.email}
            {...this.props}
          />
          <div className="d-flex justify-content-center text-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={this.props.dataUser.avatar}
                alt="avatar"
                id="avatar"
              />
              <div className="card-body">
                <h4 className="card-text">Name: {this.props.dataUser.name}</h4>
                <h6>email: {this.props.dataUser.email}</h6>
                <h6>gender: {this.props.dataUser.gender}</h6>
                <h6>age: {this.props.dataUser.age}</h6>
                <h6>weight: {this.props.dataUser.weight}</h6>
                <h6>height: {this.props.dataUser.height}</h6>
              </div>
            </div>
          </div>
          <FooterBar />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.user.is_login,
    dataUser: state.user,
  };
};
export default connect(mapStateToProps)(Profile);
