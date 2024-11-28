let student = {
  name: "boldo",
  age: 15,
  school: "oyunlag",
  gender: "male",
  grades: [80, 90, 50],
};
student.age = 16;
student.grades[1] = 100;

let students = [
  { name: "dorjo", age: 15, gender: "male" },
  { name: "dulma", age: 30, gender: "female" },
  { name: "dondog", age: 5, gender: "male" },
  { name: "bata", age: 50, gender: "male" },
  { name: "tsetsge", age: 10, gender: "female" },
];

function findAdults(input) {
  let adults = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].age >= 18) {
    }
  }
}
