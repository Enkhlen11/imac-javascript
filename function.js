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

// 1. Function too avaad gatsuur uusgeh
//input: 3
//output:
//*
//**
//***
function gatsuur(a) {
  for (let i = 1; i <= a; i++) {
    console.log("*");
  }
}
gatsuur(3);
// 2. functiond 3 too uguud hamgiin iheesee 2dhiign olno
//input: (10, 11, 30)
//output: 11
function num(a, b, c) {
  if (a > b) {
    if (a > c) {
      console.log(c);
    } else {
      console.log(a);
    }
  } else {
    if (b > c) {
      console.log(c);
    } else {
      console.log(b);
    }
  }
}
num(5, 2, 3);
// 3. Functiond n too orj irhed ter too hurtel hevlene.
//    hevlehdee 3t huvaagddag bol "Fizz" 5t huvaagddag bol "Buzz"
//    2uulandn huvaagddag bol FizzBuzz
//input: 15
//output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz .... 14, FizzBuzz
function too(a) {
  for (let i = 1; i <= a; i = i + 1) {
    if (i % 3 == 0) {
      if (i % 5 == 0) {
        console.log(i, "FizzBuzz");
      } else {
        console.log(i, "Fizz");
      }
    } else {
      if (i % 5 == 0) {
        console.log(i, "Buzz");
      } else {
        console.log(i);
      }
    }
  }
}
too(15);

// *****
// *****
// *****
// *****
// *****
function squareStar(num) {
  for (let j = 0; j < num; j++) {
    let str = "";
    for (let i = 0; i < num; i++) {
      str = str + "*";
    }
    console.log(str);
  }
}
squareStar(5);

// *****
// *---*
// *---*
// *---*
// *****
// hollow square
function hollowSquare(num) {
  for (let j = 0; j < num; j++) {
    let str = "";
    for (let i = 0; i < num; i++) {
      if (j == 0 || j == 4 || i == 0 || i == num - 1) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
}
hollowSquare(5);

// ----*j=0
// ---**j=1
// --***j=2
// -****j=3
// *****j=4
// mirrored right triangle star pattern
function mirrorRightTri(num) {
  for (let j = 0; j < num; j++) {
    let str = " ";
    for (let i = 0; i < num - j - 1; i++) {
      str = str + " ";
    }
    for (let i = 0; i <= j; i++) {
      str = str + "*";
    }
    console.log(str);
  }
}
mirrorRightTri(5);

// ----*---- j=0 *->1
// ---***--- j=1 *->3
// --*****-- j=2 *->5
// -*******- j=3 *->7
// ********* j=4 *->9
// pyramid star pattern
function pyramid(num) {
  for (let j = 0; j < num; j++) {
    let str = " ";
    for (let i = 0; i < num - j - 1; i++) {
      str = str + " ";
    }
    for (let i = 0; i < j * 2 + 1; i++) {
      str = str + "*";
    }
    console.log(str);
  }
}
pyramid(5);

// ----*---- j=0 *->1
// ---*-*--- j=1 *->3
// --*---*-- j=2 *->5
// -*-----*- j=3 *->7
// ********* j=4 *->9
//hollow  pyramid star pattern
function hollowPyramid(num) {
  for (let j = 0; j < num; j++) {
    let str = " ";
    for (let i = 0; i < num - j - 1; i++) {
      str = str + " ";
    }
    for (let i = 0; i <= j * 2; i++) {
      if (i == 0 || j == num - 1 || i == j * 2) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
}
hollowPyramid(5);

// --*****-----*****--
// -*******---*******-
// *********-*********
// *******************
// -*****************-
// --***************--
// ---*************---
// ----***********----
// -----*********-----
// ------*******------
// -------*****-------
// --------***--------
// ---------*---------
// heart star pattern
