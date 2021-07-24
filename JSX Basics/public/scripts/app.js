"use strict";

var personData = {
  name: "S G V D N Sai Santhosh Palakollu",
  age: 21,
  desgination: "Software Engineer",
  highestDegree: "Bachelors",
  location: "Andhra Pradesh",
  bloodGroup: "B -ve"
};

// Function that will return firstname
function getFirstName() {
  return personData.name.split(" ")[0];
}

// Function that will return middlename
function getMiddleName() {
  if (personData.name.split(" ").length >= 2) {
    var nameLength = personData.name.split(" ").length;
    var middleNameList = personData.name.split(" ").slice(1, nameLength - 1);
    var middleName = "";
    for (var i = 0; i < middleNameList.length; i++) {
      middleName = middleName + middleNameList[i] + " ";
    }
    return middleName;
  } else {
    return "Not Applicable";
  }
}

// Function that will return lastname
function getLastName() {
  var nameLength = personData.name.split(" ").length;
  return personData.name.split(" ")[nameLength - 1];
}

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "p",
    null,
    "First Name: ",
    getFirstName()
  ),
  React.createElement(
    "p",
    null,
    "Middle Name: ",
    getMiddleName()
  ),
  React.createElement(
    "p",
    null,
    "Last Name: ",
    getLastName()
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    personData.age
  ),
  React.createElement(
    "p",
    null,
    "Blood Group: ",
    personData.bloodGroup
  ),
  React.createElement(
    "p",
    null,
    "Designation: ",
    personData.desgination
  ),
  React.createElement(
    "p",
    null,
    "Highest Degree: ",
    personData.highestDegree
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    personData.location
  )
);

var rootId = document.getElementById("app");

ReactDOM.render(template, rootId);
