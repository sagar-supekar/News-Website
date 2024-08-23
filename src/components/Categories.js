import React, { Component } from "react";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      category: 'general', 
    };
  }

  handleCategoryChange = (category) => {
    this.setState({ category });
  }

  render() {
    const { category } = this.state;
    const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology', 'country'];

    const navbarStyle = {
      position: "sticky",
      top: "0",
      zIndex: "1000",
      backgroundColor: "#f8f9fa",
      borderBottom: "1px solid #ddd",
    };

    return (
      <div style={{ position: "sticky", top: "0", zIndex: "1000", borderRadius: "20px", width: "100%" }}>
       
        <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
          <div className="container-fluid">
            
            <a className="navbar-brand d-flex align-items-center justify-content-center" href="/">
             
            </a>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                {categories.map((cat) => (
                  <li className="nav-item" key={cat}>
                    <button
                      className={`nav-link btn btn-link ${category === cat ? "active" : ""}`}
                      onClick={() => this.handleCategoryChange(cat)}
                      style={{ cursor: "pointer", textAlign: "center" }}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
