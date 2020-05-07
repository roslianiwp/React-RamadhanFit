import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getRecipeNews,
  handleRequestKeyword,
} from "../store/action/newsAction";
import { handleInputChat, talkChat } from "../store/action/actionChatBot";
import Navigation from "../components/NavBar";
import FooterBar from "../components/Footer";
import ChatBot from "../components/ChatBot";
import ResultChatComp from "../components/ResultChatComp";

class ResultChat extends Component {
  componentDidMount = async () => {
    console.log("mounted");
    const paramKeyword = await this.props.ngobrol;
    this.props.talkChat(paramKeyword);
  };

  render() {
    // console.warn("cek dari resultchat", this.props);
    return (
      <React.Fragment>
        <Navigation {...this.props} />
        <div className="container">
          <h3 mb-5>Search Result</h3>
          <div className="row">
            {this.props.jawaban.map((el, index) => (
              <div className="col-sm-4 mb-3" key={index}>
                <ResultChatComp
                  index={index}
                  image={el.image}
                  title={el.title}
                  link={el.link}
                />
              </div>
            ))}
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
  talkChat,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultChat);
