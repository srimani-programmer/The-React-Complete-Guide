const personData = {
  name: "S G V D N Sai Santhosh Palakollu",
  age: 21,
  desgination: "Software Engineer",
  highestDegree: "Bachelors",
  location: "Andhra Pradesh",
  bloodGroup: "B -ve",
};

// Function that will return firstname
function getFirstName() {
  return personData.name.split(" ")[0];
}

// Function that will return middlename
function getMiddleName() {
  if (personData.name.split(" ").length >= 2) {
    const nameLength = personData.name.split(" ").length;
    const middleNameList = personData.name.split(" ").slice(1, nameLength - 1);
    let middleName = "";
    for (let i = 0; i < middleNameList.length; i++) {
      middleName = middleName + middleNameList[i] + " ";
    }
    return middleName;
  } else {
    return "Not Applicable";
  }
}

// Function that will return lastname
function getLastName() {
  const nameLength = personData.name.split(" ").length;
  return personData.name.split(" ")[nameLength - 1];
}

const template = (
  <div>
    <p>First Name: {getFirstName()}</p>
    <p>Middle Name: {getMiddleName()}</p>
    <p>Last Name: {getLastName()}</p>
    <p>Age: {personData.age}</p>
    <p>Blood Group: {personData.bloodGroup}</p>
    <p>Designation: {personData.desgination}</p>
    <p>Highest Degree: {personData.highestDegree}</p>
    <p>Location: {personData.location}</p>
  </div>
);

const rootId = document.getElementById("app");

ReactDOM.render(template, rootId);
