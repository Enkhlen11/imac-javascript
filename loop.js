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
