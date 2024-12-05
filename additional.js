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
// let getGrade = (students) => {
//   let grades = students.map;
// };
// // getMaleStudent
// const getMaleStudents = (students) => {
//   const males = students.filter((student) => {
//     return student.gender == "male";
//   });
//   return males;
// };
// console.log(getMaleStudents(students));

// const getStudentsWithB = (getStudentB) => {
//   const studentB = getStudentB.filter((student) => {
//     return student.name.includes("b");
//   });
//   return studentB;
// };
// console.log(getStudentsWithB(students));

const getStudentsWithB = (getStudentB) => {
  const studentB = getStudentB.filter((student) => {
    return student.name[0] == "b";
  });
  return studentB;
};
console.log(getStudentsWithB(students));
