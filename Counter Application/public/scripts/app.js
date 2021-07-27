"use strict";

var appId = document.getElementById("app");

var buttonStyle = {
  margin: "5px"
};

var count = 0;

var addOne = function addOne() {
  count += 1;
  counterApplication();
};

var subtractOne = function subtractOne() {
  count -= 1;
  counterApplication();
};

var resetCounter = function resetCounter() {
  count = 0;
  counterApplication();
};

var counterApplication = function counterApplication() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { style: { textAlign: "center" } },
      "Counter Application"
    ),
    React.createElement("hr", null),
    React.createElement(
      "h2",
      { style: { textAlign: "center" } },
      "Counter: ",
      count
    ),
    React.createElement(
      "button",
      { style: buttonStyle, onClick: addOne },
      "Add One"
    ),
    React.createElement(
      "button",
      { style: buttonStyle, onClick: subtractOne },
      "Subtract One"
    ),
    React.createElement(
      "button",
      { style: buttonStyle, onClick: resetCounter },
      "Reset One"
    )
  );

  ReactDOM.render(template, appId);
};

counterApplication();
