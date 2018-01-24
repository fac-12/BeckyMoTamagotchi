import React from "react";
import "./style.css";

export default class ProgressBar extends React.Component {
  state = {
    count: 500
  };

  countDown = () => {
    this.setState((prevState, props) => {
      if (prevState.count === 0) {
        return { count: prevState.count };
      }
      return { count: prevState.count - 1 };
    });
  };
  componentDidMount = () => setInterval(this.countDown, 10);

  feed = () => {
    this.setState((prevState, props) => {
      return { count: prevState.count + 100 };
    });
  };

  render() {
    const ProgressBarStyle = {
      width: this.state.count + "px",
      backgroundColor: "blue"
    };
    return (
      <div style={ProgressBarStyle}>
        <p>{this.state.count.toFixed()}</p>
        <button onClick={this.feed}>Feed</button>
      </div>
    );
  }
}
