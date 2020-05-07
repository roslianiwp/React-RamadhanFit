import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from "../components/NavBar";
import FooterBar from "../components/Footer";
import { Redirect } from "react-router-dom";
import { countBMR, getHealthRecipe } from "../store/action/actionNutrient";
import FoodNutrientProfile from "../components/FoodNutrientProfile";
import FoodNutrientMenu from "../components/FoodNutrientMenu";

class Nutrient extends Component {
  componentDidMount = async () => {
    console.warn("cobaaa cek props dari nutrient halaman", this.props);
    this.props.countBMR();
    this.props.getHealthRecipe();
  };

  render() {
    if (this.props.login === false) {
      return (
        <Redirect
          to={{
            pathname: "/signin",
            state: {
              message: "Sign in dahulu untuk melihat informasi kesehatanmu",
            },
          }}
        />
      );
    } else {
      return (
        <React.Fragment>
          <Navigation />
          <div className="container">
            <div className="row">
              <div className="col-sm-12 d-flex justify-content-center">
                <FoodNutrientProfile
                  name={this.props.name}
                  weight={this.props.weight}
                  height={this.props.height}
                  bmr={this.props.bmr}
                  avatar={this.props.avatar}
                  status={this.props.status}
                />
              </div>
            </div>
            <hr />
            <div className="row mt-5">
              {this.props.resep.map((el, index) => (
                <div className="col-sm-4" key={index}>
                  <FoodNutrientMenu
                    index={index}
                    title={el.title}
                    durasi={el.readyInMinutes}
                    source={el.sourceUrl}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* <div> nutrisi: {this.props.nutrisi}</div> */}

          <FooterBar />
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    gender: state.user.gender,
    age: state.user.age,
    weight: state.user.weight,
    height: state.user.height,
    avatar: state.user.avatar,
    status: state.nutrient.status,
    bmr: state.nutrient.bmr,
    login: state.user.is_login,
    resep: state.nutrient.resep,
    nutrisi: state.nutrient.nutrisi,
  };
};

const mapDispatchToProps = {
  countBMR,
  getHealthRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nutrient);
