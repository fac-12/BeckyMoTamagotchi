import React from "react";

export const Card = ({ avatar_url, login }) => (
  <div>
    <span> {login}</span>
    <img src={avatar_url} />
  </div>
);
