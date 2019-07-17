import React, { PureComponent } from "react";
import CommmetList from "./commentList";
import comments from "../data";

const App = () => {
  return (
    <React.Fragment>
      <h1 className="title">Комментарии</h1>
      <CommmetList data={comments} />
    </React.Fragment>
  );
};

export class ShowComment extends PureComponent {
  render() {
    return <App />;
  }
}

