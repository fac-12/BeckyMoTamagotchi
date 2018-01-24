import React, { Component } from "react";
import ProgressBar from "../progress_bar";
import "./style.css";

export const Card = props => {
  console.log(props, "props");
  return Object.entries(props).map(user => {
    return (
      <li key={user[1].id}>
        <span>{user[1].login}</span>
        <img src={user[1].avatar_url} />
        {user[1].avatar_url ? <ProgressBar /> : null}
      </li>
    );
  });
};
