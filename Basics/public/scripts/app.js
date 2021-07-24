"use strict";

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "React Basics"
  ),
  React.createElement(
    "p",
    null,
    "React is really Cool."
  ),
  React.createElement(
    "h4",
    null,
    "Everything is going smooth."
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
