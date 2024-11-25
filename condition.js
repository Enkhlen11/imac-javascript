let x = 794;
let y = 7;
let answer = 794 % 7;
console.log(answer);

let too = 70;

if (too % 7 == 0) {
  if (too % 11 == 0) {
    console.log("2uuland huvaagdaj baina");
  } else {
    console.log("11d huvaagdahgui, 7d huvaagdana");
  }
} else {
  if (too % 11 == 0) {
    console.log("11d huvaagdana, 7d huvaagdahgui");
  } else {
    console.log("2uuland huvaagdahgui");
  }
}

// let too = 3;
// let answer = 3 % 2;
// console.log(answer);

// homework
// 1. Write a program that calculates the total cost of 3 apples and 2 bananas.
// Each apple costs $1.5, and each banana costs $0.8.
// Calculate the total cost and print it.

let apples = 1.5;
let banana = 0.8;

let answer = 1.5 * 3 + 0.8 * 2;
console.log(answer);

// 2. Write a program that checks if a number is even or odd.
// Input: A number x.
// Output: Print whether the number is even or odd.

let too = 2;

if (too % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

// 2.5. Write a program that checks if a number is even or odd and positive or negative
// Input: A number x.
// Output: should be one of the 4 different text example: "x is even and negative"
let too = -76;
if (too % 2 == 0) {
  if (too < 0) {
    console.log("tegsh too  surug ");
  } else {
    console.log("tegsh too eyreg");
  }
} else {
  if (too < 0) {
    console.log("sondgoi too surug ");
  } else {
    console.log("sondgoi too eyreg");
  }
}
// 3. Create a basic login system.
// Input: Two variables username and password.
// If the username is "admin" and the password is "12345", print "Login successful!".
// Otherwise, print "Login failed!”.

let username = "admin";
let password = 12345;

if (username == "admin") {
  if (password == 12345) {
    console.log("successfull");
  } else {
    console.log("password buruu baina");
  }
} else {
  if (password == 12345) {
    console.log("username buruu baina");
  } else {
    console.log("username password buruu, failed");
  }
}

// 4. Write a program that categorizes a person based on their age.
// If age is less than 13, print "Child".
// If age is between 13 and 19, print "Teenager".
// Otherwise, print "Adult”.

let nas = 4;
if(nas<13){
  console.log("child")
  }else{
    if(nas<19){
      console.log("teenage");
    }else{
  console.log("adult");
    }
  }

//  5. Write a program that performs a basic arithmetic operation based on user input.
// Inputs: Two numbers (num1, num2)
// Output: Perform the 4 operations and print the result.
// Example: 22 x 10 = 220
//          22 / 10 = 2.2
//          22 + 10 = 32
//          22 - 10 = 12

let too1 = 22;
let too2 = 10;
console.log(too1, "x", too2, "=", too1 * too2);
console.log(too1, "/", too2, "=", too1 / too2);
console.log(too1, "+", too2, "=", too1 + too2);
console.log(too1, "-", too2, "=", too1 - too2);

//  6. Write a program to check if a value is true or false.
// Input: A variable value.
// Output: Print whether the value is true or false.
let utga = 10;
if (utga == 10) {
  console.log("true");
} else {
  console.log("false");
}

// 7. Write a program to convert a temperature from Celsius to Fahrenheit.
// Formula: F = C * (9/5) + 32
// Input: Celsius temperature.
// Output: Converted Fahrenheit temperature.
let cels = 140;
console.log("F", (cels * 9) / 5 + 32);
// 8. Write a program to check if a year is a leap year or not.
// A year is a leap year if it is divisible by 4 but not divisible by 100 unless also divisible by 400.
let year=

// 9. Write a program to find the smallest of three numbers.
// Input: Three numbers a, b, and c.
// Output: Print the largest number.aa
let a = 2;
let b = 25;
let c = 5;
if (a > b) {
  if (a > c) {
    console.log("a");
  } else {
    console.log("c");
  }
} else {
  if (b > c) {
    console.log("b");
  } else {
    console.log("c");
  }
}
