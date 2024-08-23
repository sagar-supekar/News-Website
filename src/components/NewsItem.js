import React, { Component } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default class NewsItem extends Component {
  handleSaveArticle = () => {
    // Retrieve the existing saved articles from localStorage
    let savedArticles = JSON.parse(localStorage.getItem("savedArticles")) || [];

    // Add the current article to the savedArticles array
    let article = {
      title: this.props.title,
      description: this.props.description,
      imageURL: this.props.imageURL,
      readMoreURL: this.props.readMoreURL,
    };
    savedArticles.push(article);

    // Save the updated array back to localStorage
    localStorage.setItem("savedArticles", JSON.stringify(savedArticles));

    alert("Article saved successfully!");
  };

  render() {
    let { title, description, imageURL, readMoreURL } = this.props;

    // Button styles
    const buttonStyles = {
      readMore: {
        backgroundColor: "#003366",
        color: "#ffffff",
        fontSize: "0.8rem",
        padding: "4px 8px",
        border: "none",
        borderRadius: "4px",
      },
      readMoreHover: {
        backgroundColor: "black",
      },
      save: {
        backgroundColor: "#003366",
        color: "#ffffff",
        fontSize: "0.8rem",
        padding: "4px 8px",
        border: "none",
        borderRadius: "4px",
      },
      saveHover: {
        backgroundColor: "black",
      },
      share: {
        backgroundColor: "#003366",
        color: "#ffffff",
        fontSize: "0.8rem",
        padding: "4px 8px",
        border: "none",
        borderRadius: "4px",
      },
      shareHover: {
        backgroundColor: "black",
      },
      dropdownMenu: {
        minWidth: "150px",
      },
      dropdownItem: {
        display: "flex",
        alignItems: "center",
        padding: "8px 16px",
        fontSize: "0.9rem",
        color: "#000000",
      },
      icon: {
        marginRight: "8px",
      },
    };

    return (
      <div
        className="card mb-4"
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ecebf7",
          color: "black",
        }}
      >
        <img
          src={imageURL}
          className="card-img-top"
          alt="News"
          style={{ objectFit: "cover", height: "200px" }}
        />
        <div
          className="card-body"
          style={{ flex: 1, display: "flex", flexDirection: "column" }}
        >
          <h5
            className="card-title"
            style={{
              height: "3rem",
              overflowY: "auto",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            {title}
          </h5>
          <p className="card-text">{description}...</p>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <a
              href={readMoreURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={buttonStyles.readMore}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  buttonStyles.readMoreHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  buttonStyles.readMore.backgroundColor)
              }
            >
              Read more
            </a>

            <button
              type="button"
              className="btn"
              style={buttonStyles.save}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  buttonStyles.saveHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  buttonStyles.save.backgroundColor)
              }
              onClick={this.handleSaveArticle}
            >
              Save
            </button>

            <div className="dropdown">
              <button
                type="button"
                className="btn"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={buttonStyles.share}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    buttonStyles.shareHover.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    buttonStyles.share.backgroundColor)
                }
              >
                Share
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButton"
                style={buttonStyles.dropdownMenu}
              >
                <li>
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://your-article-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item"
                    style={buttonStyles.dropdownItem}
                  >
                    <FaFacebook style={buttonStyles.icon} /> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/intent/tweet?url=https://your-article-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item"
                    style={buttonStyles.dropdownItem}
                  >
                    <FaTwitter style={buttonStyles.icon} /> Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/shareArticle?url=https://your-article-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item"
                    style={buttonStyles.dropdownItem}
                  >
                    <FaLinkedin style={buttonStyles.icon} /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?text=https://your-article-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item"
                    style={buttonStyles.dropdownItem}
                  >
                    <FaWhatsapp style={buttonStyles.icon} /> WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
