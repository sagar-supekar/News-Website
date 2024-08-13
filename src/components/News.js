import React, { Component } from "react";
import NewsItem from "./NewsItem";


export default class News extends Component {
  constructor() {
    super();
    console.log("this is the constructor");

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=sport&apiKey=b82d248dbc3f41bfade2e7ea9b1d53ce";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/everything?q=sport&apiKey=b82d248dbc3f41bfade2e7ea9b1d53ce&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
    });
  };

  handlePreClick = async () => {
    let url = `https://newsapi.org/v2/everything?q=sport&apiKey=b82d248dbc3f41bfade2e7ea9b1d53ce&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  };

  render() {
    return (
      <div className="container-fluid d-flex flex-wrap">
        {/* Left Column: Aboutus - Stays Fixed */}
       
          
       

        {/* Right Column: News Items - Scrolls */}
        <div className="col-12 col-md-8 container my-1">
          {/* <h1 style={{ color: "white", paddingLeft: "30px" }}>Top Headlines</h1> */}
          <div className="row mx-4">
            {this.state.articles.map((element) => {
              return (
                <div className="col-12 col-sm-6 col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title.slice(0, 30)}
                    description={element.description.slice(0, 50)}
                    imageURL={element.urlToImage}
                    readMoreURL={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlePreClick}
              disabled={this.state.page <= 1}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
