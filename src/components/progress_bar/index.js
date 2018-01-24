import React from "react";
import "./style.css";

export default class ProgressBar extends React.Component {
  state = {
    count: 500
  };

  count = () => {
    this.setState((prevState, props) => {
      return { count: prevState.count - 1 };
    });
  };
  componentDidMount = () => setInterval(this.count, 100);

  render() {
    return (
      <div className="progressbar">
        <p>{this.count.toFixed()}</p>
      </div>
    );
  }
}
