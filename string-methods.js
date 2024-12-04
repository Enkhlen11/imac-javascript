// let text = "replace ,doo, doo, doo, doo, doo, doo.";
// let lyricsArr = [
//   "Baby shark",
//   "Mommy shark",
//   "Daddy shark",
//   "Grandma shark",
//   "let's go hunt",
//   "run away",
//   "safe at last",
//   "It's the end",
// ];
// lyricsArr.map((lyrics) => {
//   let line = text.replace("replace", lyrics);
//   for (let i = 0; i < 3; i++) {
//     console.log(line);
//   }
//   console.log(lyrics + "!");
// });

// //CHALLENGES
// // 1. INPUT: "Hello world! I am Fullstack Developer"
// //    Ehendeh hamgiin urt ugiin olj hevleh
// //    OUTPUT: "Fullstack"
// let text = "Hello world! I am Fullstack Developer";
// let splited = text.split(" ");
// console.log(splited);
// let findMax = "";
// splited.map((a) => {
//   if (a.length > findMax.length) {
//     findMax = a;
//   }
//   // console.log(a.length);
// });
// console.log(findMax);

// // 2. INPUT: "Hello world! I am Fullstack Developer"
// //    Hamgiin ehnii hamgiin suuliing ug hoyriin bairiig solij hevleh
// // // //    OUTPUT: "Developer world! I am Fullstack Hello"
// let text2 = "Hello world! I am Fullstack Developer";
// let array = text2.split(" ");
// console.log(array);
// let first = array[0];
// let last = array[array.length - 1];
// let text3 = text2.replace(last, first);
// text3 = text3.replace(first, last);
// // console.log(text3);
// // string method -> Split ashiglan bodno

// // 3. Input: "97699123456"
// //    Utasnii dugaariig formatalj zuv bolgoj haruulah
// //    Output: "(976) 99123456"

let phoneNumber = "97699123456";
let format = phoneNumber.replace("976", "(976) ");
console.log(format);
// 4. Input: "I am fucking tired", 'fucking'
//    Haraaliin ugiin censor hiih
//    Output: "I am **** tired"

let text = "I am fucking tired";
// console.log(array);
let output = text.replace("fucking", "****");
console.log(output);

// FIND
const names = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 25 },
  { name: "John", age: 30 },
  { name: "Jane", age: 35 },
  { name: "Joe", age: 40 },
];
const name2 = [
  { name: "Andy", age: 20 },
  { name: "Bilguun", age: 25 },
  { name: "Jargalmaa", age: 30 },
  { name: "Anguuch", age: 35 },
  { name: "Mah", age: 40 },
  { name: "Chinguun", age: 45 },
];
// 1. FIND FIRST PERSON THAT NAME STARTS WITH 'C'
let sum = [...names, ...name2];
// console.log(sum);

let findPerson = sum.find((c) => {
  return c.name[0] == "C";
});
console.log(findPerson);
// 2. FIND FIRST PERSON THAT OLDER THAN 25
let findAge = sum.find((age) => {
  return age.age == 25;
});
console.log(findAge);
