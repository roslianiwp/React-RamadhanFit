import React from "react";

const LittleNews = (props) => {
  const { title, image, url } = props;

  return (
    <div>
      <div className="mb-3">
        <div className="card">
          <div className="card-body">
            <img src={image} className="card-img-top img-fluid" alt="news" />
          </div>
          <div className="card-footer">
            <a href={url}>
              <p className="card-title">{title}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LittleNews;
