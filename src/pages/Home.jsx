import React, { Component } from "react";
import NewsPage from "../components/News";
import { connect } from "react-redux";
import {
  getRecipeNews,
  handleRequestKeyword,
} from "../store/action/newsAction";
import { doSignOut } from "../store/action/actionUser";
import LittleNews from "../components/LittleNews";
import Navigation from "../components/NavBar";
import FooterBar from "../components/Footer";

class Home extends Component {
  componentDidMount = async () => {
    console.log("mounted");
    const paramKeyword = await this.props.match.params.paramKeyword;
    this.props.getRecipeNews(paramKeyword);
  };

  handleRequestKeywordNews = async (keywordName) => {
    await this.props.history.replace("/news-keyword/" + keywordName);
    const paramKeyword = await this.props.match.params.keyword;
    this.props.handleRequestKeyword(paramKeyword);
  };

  render() {
    return (
      <React.Fragment>
        <Navigation
          history={this.history}
          handleRouter={(e) => this.handleRequestKeywordNews(e)}
          getRecipeNews={() => this.getRecipeNews()}
          doSignOut={() => this.props.doSignOut()}
          login={this.login}
          avatar={this.props.avatar}
          name={this.props.name}
          email={this.props.email}
          {...this.props}
        />
        <div className="container">
          <h1>Ramadhan Information</h1>
          {this.props.dataRecipeNews.slice(0, 1).map((el, index) => {
            return (
              <NewsPage
                index={index}
                title={el.title}
                description={el.description}
                image={el.urlToImage}
                url={el.url}
                publishedAt={el.publishedAt}
              />
            );
          })}
          <div className="row">
            {this.props.dataRecipeNews.slice(1, 7).map((el, index) => {
              return (
                <div className="col-sm-4">
                  <LittleNews
                    index={index}
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
    dataSuggestion: state.newsRecipe.suggest,
    login: state.user.is_login,
    dataUser: state.user,
  };
};

const mapDispatchToProps = {
  getRecipeNews,
  handleRequestKeyword,
  doSignOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
