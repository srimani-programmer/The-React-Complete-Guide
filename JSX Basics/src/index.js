const personData = {
  name: "Test",
  age: 24,
  desgination: "Software Engineer",
  highestDegree: "Bachelors",
  location: "Andhra Pradesh",
  bloodGroup: "B -ve",
  isEmployee: true,
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
  if (nameLength >= 2) {
    return personData.name.split(" ")[nameLength - 1];
  } else {
    return "Not Applicable";
  }
}

function getEmployeeStatus() {
  if (personData.isEmployee) {
    return <p>Designation: {personData.desgination}</p>;
  } else {
    return <p>Designation: UnEmployeed</p>;
  }
}

const template = (
  <div>
    <p>First Name: {getFirstName()}</p>
    <p>Middle Name: {getMiddleName()}</p>
    <p>Last Name: {getLastName()}</p>
    <p>Age: {personData.age}</p>
    <p>Blood Group: {personData.bloodGroup}</p>
    {getEmployeeStatus()}
    <p>Highest Degree: {personData.highestDegree}</p>
    <p>Location: {personData.location}</p>
  </div>
);

const rootId = document.getElementById("app");

ReactDOM.render(template, rootId);
