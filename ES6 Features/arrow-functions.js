const generalSquare = function (x) {
  return x * x;
};

console.log(generalSquare(7));

const square = (x) => {
  return x * x;
};

console.log("Square of a number: ", square(5));

const cube = (x) => x * x * x;

console.log("Cube of a number: ", cube(3));

// arguments object is no longer bound to the arrow functions

const generalAddAll = function () {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      sum += arguments[i];
    }
  }

  return sum;
};

console.log(
  "Total Add values are:",
  generalAddAll(1, 2, 3, 4, 5, "a", "hello", 7)
);

// The below code will throw an error because this keyword is no lnger bound to the arrow functions
// const arrowAddAll = () => {
//   let sum = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] === "number") {
//       sum += arguments[i];
//     }
//   }

//   return sum;
// };

// console.log(
//   "Total Add values are:",
//   arrowAddAll(1, 2, 3, 4, 5, "a", "hello", 7)
// );
