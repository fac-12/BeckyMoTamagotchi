import React from "react";
import "./style.css";

export default class ProgressBar extends React.Component {
  state = {
    count: 400
  };

  countDown = () => {
    this.setState((prevState, props) => {
      if (prevState.count === 0) {
        return { count: prevState.count };
      }
      return { count: prevState.count - 1 };
    });
  };
  componentDidMount = () => setInterval(this.countDown, 100);

  feed = () => {
    this.setState((prevState, props) => {
      return { count: prevState.count + 50 };
    });
  };

  delete = () => {};

  render() {
    const ProgressBarStyle = {
      width: this.state.count + "px",
      backgroundColor: "#909090"
    };
    return (
      <div style={ProgressBarStyle}>
        <p>{this.state.count.toFixed()}</p>
        <button onClick={this.feed} className="feedbutton">
          Feed
        </button>
        <button onClick={this.delete} className="feedbutton">
          Delete
        </button>
      </div>
    );
  }
}
