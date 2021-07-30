class Person {
  constructor(name, age, location, mobile) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.mobile = mobile;
  }

  getDetails() {
    return `
      Name: ${this.name}
      Age: ${this.age}
      Location: ${this.location}
      Mobile: ${this.mobile}`;
  }
}

const p1 = new Person("John", 27, "US", "+139000000009");
console.log(p1.getDetails());

const p2 = new Person("Peter", 29, "NZ", "+69732323320");
console.log(p2.getDetails());
