import React, { Component } from "react";
import { getUserData } from "../../utils/data_helpers";
import { Card } from "../card";
import "./style.css";

export default class SearchBar extends Component {
  state = {
    data: [],
    value: null
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    getUserData(this.state.value)
      .then(userData => {
        const userDataNew = [];
        userDataNew.push(userData);
        this.setState((prevState, props) => {
          console.log(userData, "userData");
          return {
            data: [...prevState.data.concat(userDataNew)]
          };
        });
        // const jsonState = JSON.stringify(this.state);
        // localStorage.setItem("state", jsonState);
      })
      .catch(err => console.log(err));
  };

  render() {
    // const savedState = localStorage.getItem("state");
    // console.log(savedState);
    //
    // if (savedState) {
    //   const saveState = JSON.parse(savedState);
    //   const saveStateNew = [];
    //   saveStateNew.push(saveState);
    //   console.log(saveStateNew, "ssn");
    //
    //   this.setState = (prevState, props) => {
    //     return {
    //       data: [...prevState.data.concat(saveStateNew)]
    //     };
    //   };
    // }
    const { avatar_url } = this.state.data;
    return (
      <div>
        <ul className="list">
          {this.state.data.length > 0 ? <Card {...this.state.data} /> : null}
        </ul>
        <form id="searchForm" onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
