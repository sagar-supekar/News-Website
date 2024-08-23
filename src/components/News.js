import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    console.log("this is the constructor");

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      category: "all",
    };
  }

  handleState = async () => {
    this.setState({ category: "US" });
  };
  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=${this.state.category}&apiKey=b82d248dbc3f41bfade2e7ea9b1d53ce&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ loading: false });
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/everything?q=${
      this.state.category
    }&apiKey=b82d248dbc3f41bfade2e7ea9b1d53ce&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ loading: false });
    console.log(parseData);

    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
    });
  };

  handlePreClick = async () => {
    let url = `https://newsapi.org/v2/everything?q=${
      this.state.category
    }&apiKey=b82d248dbc3f41bfade2e7ea9b1d53ce&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ loading: false });
    console.log(parseData);

    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  };

  render() {
    const defaultImageURL =
      "https://cdn.vox-cdn.com/thumbor/2XfhnRSt_-BCJxnVNwFVTX39s2o=/0x0:1700x996/1200x628/filters:focal(850x498:851x499)/cdn.vox-cdn.com/uploads/chorus_asset/file/25536453/Screen_Shot_2024_07_18_at_11.04.13_AM.png";
    const defaultdescription = "Loading Description";
    return (
      <div className="container-fluid d-flex flex-wrap">
        <div className="col-12 col-md-8 container my-4">
          {this.state.loading && <Spinner />}
          {/* <h1 style={{ color: "white", paddingLeft: "30px" }}>Top Headlines</h1> */}
          <div className="row mx-4 ">
            {this.state.articles.map((element) => {
              return (
                <div
                  className="col-12 col-sm-6 col-md-4 mb-4 d-flex align-items-stretch"
                  key={element.url}
                >
                  <NewsItem
                    title={element.title}
                    description={
                      element.description.slice(0, 50)
                        ? element.description.slice(0, 100)
                        : defaultdescription
                    }
                    imageURL={
                      element.urlToImage ? element.urlToImage : defaultImageURL
                    }
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
