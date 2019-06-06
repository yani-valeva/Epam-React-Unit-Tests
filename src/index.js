import React from "react";
import ReactDOM from "react-dom";
import ListContainer from "./containers/ListContainer/ListContainer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ListContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
