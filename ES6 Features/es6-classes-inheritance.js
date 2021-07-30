class University {
  constructor(
    universityName,
    yearOfEstd,
    location,
    universityRegistrationNumber,
    noOfSpecializationsOffered
  ) {
    this.universityName = universityName;
    this.yearOfEstd = yearOfEstd;
    this.location = location;
    this.universityRegistrationNumber = universityRegistrationNumber;
    this.noOfSpecializationsOffered = noOfSpecializationsOffered;
  }

  getUniveristyProfile() {
    return `
University Name: ${this.universityName}
Established Year: ${this.yearOfEstd}
Location: ${this.location}
Univeristy Registration Number: ${this.universityRegistrationNumber}
Degrees Offered: ${this.noOfSpecializationsOffered}
        `;
  }
}

const university = new University("JNTUH", 1918, "Hyderabad", "JHPT70323", 15);
console.log(university.getUniveristyProfile());

class Department extends University {
  constructor(
    universityName,
    yearOfEstd,
    location,
    universityRegistrationNumber,
    noOfSpecializationsOffered,
    noOfStudents,
    noOfProfessors,
    noOfAssitantProfessors,
    headOfDepartment
  ) {
    super(
      universityName,
      yearOfEstd,
      location,
      universityRegistrationNumber,
      noOfSpecializationsOffered
    );
    this.noOfStudents = noOfStudents;
    this.noOfProfessors = noOfProfessors;
    this.noOfAssitantProfessors = noOfAssitantProfessors;
    this.headOfDepartment = headOfDepartment;
  }

  getDepartmentDetails() {
    return `
Professors Count: ${this.noOfProfessors}
Assistant Professors Count: ${this.noOfAssitantProfessors}
Students Count: ${this.noOfStudents}
Head Of the Department: ${this.headOfDepartment}
      `;
  }
}

const department = new Department(
  "JNTUH",
  1918,
  "Hyderabad",
  "JHPT70323",
  15,
  400,
  32,
  40,
  "Rajendar"
);
console.log(department.getDepartmentDetails());

// console.log(University);
// console.log(Department);
