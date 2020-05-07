import React from "react";
// import "../css/ChatBot.css";
// import { Link } from "react-router-dom";

const ResultChatComp = ({ index, image, title, link }) => {
  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img src={image} alt="imageres" class="card-img-top" />
        <div class="card-body text-left">
          <p>
            <strong>
              {index + 1}. {title}
            </strong>
          </p>
          <a href={link}>
            <p class="card-text">Read more</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResultChatComp;
