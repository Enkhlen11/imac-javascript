// let text = "replace ,doo, doo, doo, doo, doo, doo.";
// let lyricsArr = [
//   "Baby shark",
//   "Mommy shark, Daddy shark",
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

//CHALLENGES
// 1. INPUT: "Hello world! I am Fullstack Developer"
//    Ehendeh hamgiin urt ugiin olj hevleh
//    OUTPUT: "Fullstack"
let text = "Hello world! I am Fullstack Developer";
let splited = text.split(" ");
console.log(splited);
let findMax = "";
splited.map((a) => {
  if (a.length > findMax.length) {
    findMax = a;
  }
  //   console.log(a.length);
});
console.log(findMax);

// 2. INPUT: "Hello world! I am Fullstack Developer"
//    Hamgiin ehnii hamgiin suuliing ug hoyriin bairiig solij hevleh
//    OUTPUT: "Developer world! I am Fullstack Hello"
let text2 = "Hello world! I am Fullstack Developer";
let array = text2.split(" ");
console.log(array);
let first = array[0];
let last = array[array.length - 1];
let text3 = text2.replace(last, first);
text3 = text3.replace(first, last);
console.log(text3);
// string method -> Split ashiglan bodno
