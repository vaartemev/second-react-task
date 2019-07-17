import React, { PureComponent } from "react";
import Rating from "./rating";

class CommentItem extends PureComponent {
  render() {
    const { data } = this.props;
    const { author, comment } = data;
    return (
      <div className="comment">
        <div className="comment__author">{author}</div>
        <div className="comment__text">{comment}</div>
        <Rating />
      </div>
    );
  }
}

export default CommentItem;
