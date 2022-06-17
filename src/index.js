import React from "react";
import ReactDOM from "react-dom";

// create component with Pascal case convention
//move it to Heading.jsx  then import it
// function Heading() {
//   return <h1>My favorite foods</h1>;
// }

// import Heading from "./Heading.jsx";
// //extension optional

// import List from "./List.jsx";

// ReactDOM.render(
//   <div>
//     {/* javascript reads tags in pascal case as JS */}
//     {/* <Heading></Heading> */}
//     {/* javascript convention uses self closing tabs */}
//     <Heading />
//     <List />
//   </div>,
//   document.getElementById("root")
// );

// index.js usually only renders the app function contained in app.jsx
//created App.jsx
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));
