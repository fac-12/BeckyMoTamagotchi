import React, { Component } from "react";
import ProgressBar from "../progress_bar";
import "./style.css";

export const Card = ({ login, avatar_url }) => {
  return (
    <div>
      <span>{login}</span>
      <img src={avatar_url} />
      {avatar_url ? <ProgressBar /> : null}
    </div>
  );
};
