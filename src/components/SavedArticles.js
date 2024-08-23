// src/components/SavedItems.js

import React from 'react';

class SavedArticles extends React.Component {
  render() {
    // Retrieve saved articles from localStorage
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];

    return (
      <div className="container">
        <h1 className="my-4">Saved Articles</h1>
        {savedArticles.length > 0 ? (
          <div className="row">
            {savedArticles.map((article, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="card h-100">
                  <img className="card-img-top" src={article.imageURL} alt={article.title} />
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <a href={article.readMoreURL} className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No articles saved.</p>
        )}
      </div>
    );
  }
}

export default SavedArticles;
