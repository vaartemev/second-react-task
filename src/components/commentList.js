import React, { PureComponent } from "react";
import CommentItem from "./commentItem";

class CommentList extends PureComponent {
  render() {
    const { data } = this.props;
    const comment = data.map(item => {
      return <CommentItem key={item.id} data={item} />;
    });

    return <div className="comments">{comment}</div>;
  }
}

export default CommentList;
