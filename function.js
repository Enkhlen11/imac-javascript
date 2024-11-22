// function nemeh(num1, num2) {
//   console.log(num1 + num2);
//   return num1 + num2;
// }
// nemeh(4, 8);

function hasah(too1, too2) {
  // console.log(too1 - too2);
  return too1 - too2;
}
// hasah(4, 2);
let num = hasah(4, 2);
console.log(num + num);

// function urjih(num1, num2) {
//   console.log(num1 * num2);
//   return num1 * num2;
// }
// urjih(2, 2);
// function huvaah(num1, num2) {
//   console.log(num1 / num2);
//   return num1 / num2;
// }
// huvaah(4 / 2);
// function uldegdel(num1, num2) {
//   console.log(num1 % num2);
//   return num1 % num2;
// }
// uldegdel(3, 2);

// n hvrtelh natural toog bichih
function printnumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
printnumbers(38);

// n hvrtelh toog urvuugar gargah
function printnumber(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
}
printnumber(100);

// 1ees 100 hvrtelh tegsh toog hevleh
function printnumber(n) {
  for (let i = 2; i <= n; i = i + 2) {
    console.log(i);
  }
}
printnumber(100);
// 1ees 100 hvrtel sondgoi toog hevleh
function printnumber(n) {
  for (let i = 1; i <= n; i = i + 2) {
    console.log(i);
  }
}
printnumber(100);

// 1ees n hvrtelh natural toonii niilber

function printnumber(n1, n2) {
  for (let i = 1; i <= n1; i = i + 1) {
    n2 = n2 + i;
  }
  console.log(n2);
}
printnumber(10, 0);

// 1ees n hvrtelh bvh tegsh toonuudiin niilberiig oloh

function printnumber(n1, n2) {
  for (let i = 1; i <= n1; i = i + 1) {
    if (i % 2 == 0) {
      n2 = n2 + i;
    }
  }
  console.log(n2);
}

printnumber(10, 0);

// // 1ees n hvrtelh bvh sondgoi toonuudiin niilderiig oloh
function printnumber(n1, n2) {
  for (let i = 1; i <= n1; i = i + 2) {
    n2 = n2 + i;
  }
  console.log(n2);
}
printnumber(10, 0);

// vrjihiin hvrd
function printnumber(n) {
  for (i = 1; i <= 10; i = i + 1) {
    console.log(n, "x", i, "=", n * i);
  }
}
printnumber(5);
