import React, { Component } from "react";

class Rating extends Component {

  constructor() {
    super();
    this.state = {
      rating: 0
    };
  }

  downRating = () => {
    this.setState((prevState) => ({
      rating: prevState.rating + 1
    }));
  }

  upRating = () => {
    this.setState((prevState) => ({
      rating: prevState.rating - 1
    }));
  }

  render() {
    const { rating } = this.state;
    return (
      <div className="rating">
        <button
          className="button__rating button__rating-red"
          onClick={this.upRating}
        >
          -
        </button>
        <div className="rating__text">{rating}</div>
        <button
          className="button__rating button__rating-green"
          onClick={this.downRating}
        >
          +
        </button>
      </div>
    );
  }
}

export default Rating;
