import React from "react";
import ReactDOM from "react-dom";

// create component with Pascal case convention
function Heading() {
  return <h1>My favorite foods</h1>;
}

ReactDOM.render(
  <div>
    {/* javascript reads tags in pascal case as JS */}
    <Heading></Heading>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
