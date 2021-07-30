"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var University = function () {
  function University(universityName, yearOfEstd, location, universityRegistrationNumber, noOfSpecializationsOffered) {
    _classCallCheck(this, University);

    this.universityName = universityName;
    this.yearOfEstd = yearOfEstd;
    this.location = location;
    this.universityRegistrationNumber = universityRegistrationNumber;
    this.noOfSpecializationsOffered = noOfSpecializationsOffered;
  }

  _createClass(University, [{
    key: "getUniveristyProfile",
    value: function getUniveristyProfile() {
      return "\nUniversity Name: " + this.universityName + "\nEstablished Year: " + this.yearOfEstd + "\nLocation: " + this.location + "\nUniveristy Registration Number: " + this.universityRegistrationNumber + "\nDegrees Offered: " + this.noOfSpecializationsOffered + "\n        ";
    }
  }]);

  return University;
}();

var university = new University("JNTUH", 1918, "Hyderabad", "JHPT70323", 15);
console.log(university.getUniveristyProfile());

var Department = function (_University) {
  _inherits(Department, _University);

  function Department(universityName, yearOfEstd, location, universityRegistrationNumber, noOfSpecializationsOffered, noOfStudents, noOfProfessors, noOfAssitantProfessors, headOfDepartment) {
    _classCallCheck(this, Department);

    var _this = _possibleConstructorReturn(this, (Department.__proto__ || Object.getPrototypeOf(Department)).call(this, universityName, yearOfEstd, location, universityRegistrationNumber, noOfSpecializationsOffered));

    _this.noOfStudents = noOfStudents;
    _this.noOfProfessors = noOfProfessors;
    _this.noOfAssitantProfessors = noOfAssitantProfessors;
    _this.headOfDepartment = headOfDepartment;
    return _this;
  }

  _createClass(Department, [{
    key: "getDepartmentDetails",
    value: function getDepartmentDetails() {
      return "\nProfessors Count: " + this.noOfProfessors + "\nAssistant Professors Count: " + this.noOfAssitantProfessors + "\nStudents Count: " + this.noOfStudents + "\nHead Of the Department: " + this.headOfDepartment + "\n      ";
    }
  }]);

  return Department;
}(University);

var department = new Department("JNTUH", 1918, "Hyderabad", "JHPT70323", 15, 400, 32, 40, "Rajendar");
console.log(department.getDepartmentDetails());

// console.log(University);
// console.log(Department);
