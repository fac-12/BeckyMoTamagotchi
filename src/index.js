import React from "react";
import { render } from "react-dom";
import SearchBar from "./components/search_bar";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

render(<App />, document.getElementById("root"));
