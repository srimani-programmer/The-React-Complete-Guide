const person = {
  name: "John",
  age: 27,
  profession: "Software Developer",
  hobbies: ["Reading Books", "Playing games", "Painting"],
  getHobbies: function () {
    // for (let i = 0; i < this.hobbies.length; i++) {
    //   console.log(this.name + " has hobby of " + this.hobbies[i]);
    // }
    let myThis = this;
    this.hobbies.forEach(function (hobby) {
      console.log(myThis.name + " has hobby of " + hobby);
      //   const decorateFunction = () => {
      //     console.log(myThis.name + " has hobby of " + hobby);
      //   };
      //   decorateFunction();
    });
  },
};

person.getHobbies();

const personTwo = {
  name: "Peter",
  age: 28,
  profession: "Software Engineer",
  hobbies: ["Reading Books", "Chess", "Volley Ball", "Foot ball"],
  getHobbies: function () {
    for (let i = 0; i < this.hobbies.length; i++) {
      console.log(this.name + " has hobby of " + this.hobbies[i]);
    }
  },
};

personTwo.getHobbies();
