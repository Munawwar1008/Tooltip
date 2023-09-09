import React from "react";
import "./App.css";
import "./index.css";


export default function Tooltip({ children, text, ...rest }) {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <div className="tooltip" style={show ? { visibility: "visible" } : {}}>
        {text}
        <span className="tooltip-arrow" />
      </div>
      <div
        {...rest}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
      <div className="App">
      <h1>Tooltip</h1>
      <h3>Hover to see magic 🖱️</h3>
    </div>
    </div>
  );
}
