import React, { Component } from "react";
import NewsPage from "../components/News";
import { connect } from "react-redux";
import { getRecipeNews } from "../store/action/newsAction";
import LittleNews from "../components/LittleNews";
import Navigation from "../components/NavBar";
import FooterBar from "../components/Footer";

class Home extends Component {
  componentDidMount = async () => {
    console.log("mounted");
    this.props.getRecipeNews();
  };

  render() {
    console.log("responsesssssssssssss", this.props);
    return (
      <React.Fragment>
        <Navigation />
        <div className="container">
          {this.props.dataRecipeNews.slice(0, 1).map((el, index) => {
            return (
              <NewsPage
                title={el.title}
                description={el.description}
                image={el.urlToImage}
                url={el.url}
              />
            );
          })}
          <div className="row">
            {this.props.dataRecipeNews.slice(1, 4).map((el, index) => {
              return (
                <div className="col-4">
                  <LittleNews
                    title={el.title}
                    image={el.urlToImage}
                    description={el.description}
                    url={el.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <FooterBar />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRecipeNews: state.newsRecipe.data,
  };
};

const mapDispatchToProps = {
  getRecipeNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
