import React from "react";

const NewsPage = (props) => {
  const { title, image, description, url } = props;
  return (
    <div className="mb-3">
      <div className="card">
        <div className="card-body">
          <img src={image} className="card-img-top" alt="news" />
        </div>
        <div className="card-footer">
          <a href={url}>
            <h5 className="card-title">{title}</h5>
          </a>
          <p className="card-text">{description}</p>
          <small className="text-muted">Last updated beberapa tahun</small>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
