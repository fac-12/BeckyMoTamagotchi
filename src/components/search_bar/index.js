import React, { Component } from "react";
import { getUserData } from "../../utils/data_helpers";
import { Card } from "../card";

export default class SearchBar extends Component {
  state = {
    data: {},
    value: null
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    getUserData(this.state.value)
      .then(data => this.setState({ data }))
      .catch(err => console.log(err));
  };

  render() {
    const { avatar_url } = this.state.data;
    return (
      <div>
        <form id="searchForm" onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <Card {...this.state.data} />
      </div>
    );
  }
}
