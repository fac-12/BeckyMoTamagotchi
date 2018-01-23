import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  render() {
    return (
      <div>
        <form id="searchForm">
          <input type="text" />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
