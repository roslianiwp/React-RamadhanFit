import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getRecipeNews,
  handleRequestKeyword,
} from "../store/action/actionNews";
import { doSignOut } from "../store/action/actionUser";
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
        <Navigation
          name={this.props.name}
          avatar={this.props.avatar}
          email={this.props.email}
          doSignOut={() => this.props.doSignOut()}
          {...this.props}
        />
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
    login: state.user.is_login,
    name: state.user.name,
    avatar: state.user.avatar,
    email: state.user.email,
  };
};

const mapDispatchToProps = {
  getRecipeNews,
  handleRequestKeyword,
  handleInputChat,
  talkChat,
  doSignOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultChat);
