// import React from "react";
import ReactDOM from "react-dom";

import Tooltip from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Tooltip text="Thanks for hovering! I'm a tooltip">
    <button>Hover over me!</button>
  </Tooltip>,
  rootElement
);