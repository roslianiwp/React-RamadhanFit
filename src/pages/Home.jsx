import React, { Component } from "react";
import NewsPage from "../components/News";
import { connect } from "react-redux";
import {
  getRecipeNews,
  handleRequestKeyword,
} from "../store/action/newsAction";
import { handleInputChat } from "../store/action/actionChatBot";
import LittleNews from "../components/LittleNews";
import Navigation from "../components/NavBar";
import FooterBar from "../components/Footer";
import ChatBot from "../components/ChatBot";

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
    console.log("responsesssssssssssss", this.props);
    return (
      <React.Fragment>
        <Navigation
          handleRouter={(e) => this.handleRequestKeywordNews(e)}
          getRecipeNews={() => this.getRecipeNews()}
        />
        <div className="container">
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
        <ChatBot
          keyword={this.props.ngobrol}
          doChat={(event) => this.props.handleInputChat(event)}
          {...this.props}
        />
        <FooterBar />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRecipeNews: state.newsRecipe.data,
    dataSuggestion: state.newsRecipe.suggest,
    jawaban: state.chat.jawaban,
    ngobrol: state.chat.search,
  };
};

const mapDispatchToProps = {
  getRecipeNews,
  handleRequestKeyword,
  handleInputChat,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
