import React from "react";
import "../css/ChatBot.css";
import { Link } from "react-router-dom";

const openForm = () => {
  return (document.getElementById("myForm").style.display = "block");
};

const closeForm = () => {
  return (document.getElementById("myForm").style.display = "none");
};

const ChatBot = (props) => {
  return (
    <div>
      <button className="open-button" onClick={() => openForm()}>
        <img
          src={require("../images/chatlogo.png")}
          alt="chatlogo"
          style={{ width: "80px" }}
        />
      </button>
      <div className="chat-popup" id="myForm">
        <form action="/action_page.php" className="form-container">
          <h1>Chat</h1>

          <label for="msg">
            <b>Message</b>
          </label>
          <textarea
            placeholder="Type message.."
            name="search"
            value={props.keyword}
            onChange={props.doChat}
            required
          ></textarea>
          <Link to="/result">
            <button type="submit" className="btn">
              Send
            </button>
          </Link>
          <button
            type="button"
            className="btn cancel"
            onClick={() => closeForm()}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
