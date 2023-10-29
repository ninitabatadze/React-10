import React from "react";
import ReactDOM from "react-dom/client";
import Tables from "./Tables";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Tables />
      </React.Fragment>
    )
  }

}
var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />)