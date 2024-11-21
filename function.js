// function nemeh(num1, num2) {
//   console.log(num1 + num2);
//   return num1 + num2;
// }
// nemeh(4, 8);
// function hasah(too1, too2) {
//   console.log(too1 - too2);
//   return too1 - too2;
// }
// hasah(4, 2);
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
let sum = 0;
function printnumber(n) {
  for (let i = 1; i <= n; i = i + 1) {
    sum = sum + i;
  }
  console.log(sum);
}
printnumber(5);

// 1ees n hvrtelh bvh tegsh toonuudiin niilberiig oloh

function printnumber(n) {
  let sum = 0;
  for (let i = 1; i <= n; i = i + 1) {
    if (n % i == 0) {
      console.log(i);
    }
  }
}

printnumber(10);

// 1ees n hvrtelh bvh sondgoi toonuudiin niilderiig oloh
let sum = 0;
function printnumber(n) {
  for (let i = 1; i <= n; i = i + 1) {
    sum = sum + i;
  }
  console.log(i);
}

printnumber(5);
// vrjihiin hvrd
