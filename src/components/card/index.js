import React from "react";
import ProgressBar from "../progress_bar";
import "./style.css";

export default class Card extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.login}</span>
        <img src={this.props.avatar_url} />
        <ProgressBar />
      </div>
    );
  }
}
