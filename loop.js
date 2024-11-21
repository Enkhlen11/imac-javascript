for (let i = 1; i < 101; i = i + 1) {
  console.log(i);
}

for (let i = 100; i > 0; i = i - 1) {
  console.log(i);
}

// for (let i = 1; i < 101; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
for (let i = 0; i < 101; i = i + 2) {
  console.log(i);
}

let num = 6;
let i = 1;
for (let i = 1; i <= 10; i = i + 1) {
  console.log(num, "x", i, "=", num * i);
}
// 100s sondgoi toog daraalluulsan
for (let i = 1; i < 101; i = i + 1) {
  if (i % 2 == 0) {
  } else {
    console.log(i);
  }
}
for (let i = 1; i <= 100; i = i + 2) {
  console.log(i);
}
// Write a C program to find sum of all natural numbers between 1 to n.
let num = 3;
let sum = 0;
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9;
for (let i = 1; i <= num; i = i + 1) {
  console.log(i);
  sum = sum + i;
}
console.log("sum", sum);
// Write a C program to find sum of all even numbers between 1 to n.
let num = 10;
let sum = 0;

for (let i = 1; i <= num; i = i + 1) {
  if (i % 2 == 0) {
    sum = sum + i;
  }
}
console.log(sum);
// Write a C program to find sum of all odd numbers between 1 to n.
let num = 10;
let sum = 0;
for (let i = 1; i < num; i = i + 2) {
  sum = sum + i;
  console.log(sum);
}
// Write a C program to print multiplication table of any number.
let a = 5;
let sum = 3;
for (let i = 1; i <= a; i = i + 1) {
  sum = sum * i;
  console.log(sum);
}
// Write a C program to find all factors of a number.
// 1,2,3,4,6,12
let num = 12;
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    console.log("huvaagch", i);
  }
}

// baasan garig baina
let udur = 5;
if (udur == 1) console.log("monday");
if (udur == 2) console.log("tuesday");
if (udur == 3) console.log("wednsday");
if (udur == 4) console.log("thursday");
if (udur == 5) console.log("friday");
if (udur == 6) console.log("saturday");
if (udur == 7) console.log("sunday");
