import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Car extends React.Component{
  render()
  {
    return <h1> This is just a sample</h1>
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Car />, rootElement);
