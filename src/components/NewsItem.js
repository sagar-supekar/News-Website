import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageURL, readMoreURL } = this.props;
    return (
      <div className="card mb-4">
        <img
          src={imageURL}
          className="card-img-top"
          alt="News"
          style={{ objectFit: "cover", height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <a
            href={readMoreURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-dark" 
          >
            Read more
          </a>
        </div>
      </div>
    );
  }
}
