// let student = {
//   name: "boldo",
//   age: 15,
//   school: "oyunlag",
//   gender: "male",
//   grades: [80, 90, 50],
// };
// student.age = 16;
// student.grades[1] = 100;

// let students = [
//   { name: "dorjo", age: 15, gender: "male" },
//   { name: "dulma", age: 30, gender: "female" },
//   { name: "dondog", age: 5, gender: "male" },
//   { name: "bata", age: 50, gender: "male" },
//   { name: "tsetsge", age: 10, gender: "female" },
// ];

// function findAdults(input) {
//   let adults = [];
//   for (let i = 0; i < input.length; i++) {
//     if (input[i].age >= 18) {
//       adults.push(input[i]);
//     }
//   }
//   return adults;
// }
// let result = findAdults(students);
// console.log(result);

// function findGenderMales(input) {
//   let genderMales = [];
//   for (let i = 0; i < input.length; i++) {
//     if (input[i].gender == "male") {
//       genderMales.push(input[i]);
//     }
//   }
//   return genderMales;
// }
// let result = findGenderMales(students);
// console.log(result);

// 20 hvnii dvngiin dundaj oloh
let students = [
  { name: "boldo", age: 15, grades: [10, 20, 30, 90, 80], gender: "male" },
  { name: "saraa", age: 20, grades: [43, 56, 21, 12, 1], gender: "female" },
  { name: "tsetseg", age: 30, grades: [23, 4, 21, 67, 5], gender: "female" },
  { name: "gerel", age: 55, grades: [10, 20, 30, 90, 80], gender: "female" },
  { name: "munhuu", age: 50, grades: [57, 56, 8, 12, 1], gender: "male" },
  { name: "tuguldur", age: 10, grades: [30, 45, 79, 67, 40], gender: "male" },
  { name: "zaya", age: 28, grades: [21, 45, 30, 99, 80], gender: "female" },
  { name: "saruul", age: 35, grades: [90, 56, 54, 12, 80], gender: "female" },
  { name: "vrjin", age: 30, grades: [8, 4, 21, 67, 10], gender: "female" },
  { name: "nyamaa", age: 35, grades: [50, 20, 80, 90, 20], gender: "male" },
  { name: "sanaa", age: 18, grades: [63, 56, 71, 12, 90], gender: "male" },
  { name: "naran", age: 32, grades: [34, 98, 21, 67, 5], gender: "female" },
  { name: "hashaa", age: 35, grades: [10, 60, 57, 90, 80], gender: "male" },
  {
    name: "sanchirmaa",
    age: 21,
    grades: [43, 70, 21, 90, 99],
    gender: "female",
  },
  { name: "otgon", age: 50, grades: [90, 78, 34, 67, 5], gender: "female" },
  { name: "gvnbee", age: 18, grades: [100, 90, 30, 90, 80], gender: "male" },
  { name: "anand", age: 18, grades: [83, 56, 81, 12, 79], gender: "male" },
  { name: "ganzorig", age: 36, grades: [83, 94, 71, 67, 85], gender: "male" },
  { name: "od", age: 29, grades: [80, 80, 30, 90, 80], gender: "male" },
  { name: "tegshee", age: 39, grades: [63, 56, 91, 12, 1], gender: "female" },
];
neg studentiin dvngiin dundaj oloh
function findOneStudentAverageGrade(oneStudent) {
  let grades = oneStudent.grades;
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum = sum + grades[i];
  }
  let average = sum / grades.length;
  return average;
}
// console.log(findOneStudentAverageGrade(students[0]));

// bvh studentiin dvngiin dundaj oloh
function findAllStudentAverageGrade(allStudent) {
  let sum = 0;
  for (let i = 0; i < allStudent.length; i++) {
    let average = findOneStudentAverageGrade(allStudent[i]);
    sum = sum + average;
  }
  let allAverage = sum / students.length;
  console.log(allAverage);
}
findAllStudentAverageGrade(students);
//  nasnii dundaj oloh
//  er emiin huvi oloh
