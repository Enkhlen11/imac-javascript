// ARRAY;
let ages = [10, 20, 30, 40, 50, 10];
let names = ["boldo", "dorjo", "dondog", "bataa", "boogii", "haagii"];

console.log(names[4]);
console.log(ages[4]);
console.log(ages.length);

// nasnuudiin niilberiig oloy
function findSumOfAges(ages) {
  let sum = 0;
  for (let i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
  }
  return sum;
}

let answer = findSumOfAges(ages);

let average = answer / ages.length;
console.log(average);

// \\\
let num = [48, 10, 10, 30, 40];
function aver(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }
  let answer = sum / num.length;
  return answer;
}

console.log(aver(num));
// array dotorh hamgiin baga utgiig ol
// array dotorh hamgiin baga ghdee sondgoi utgiig ol
// array dotorh hamgiin ih tegsh toog ol
let numbers = [30, 49, 30, 20, 456, 98];
function findMin(arr) {
  for (i = 0; i < arr.length; i++) {
    if (minNum > arr[i + 1]) {
      minNum = arr[i + 1];
    }

    console.log(minNum);
  }
}
findMin(numbers);

// tegsh utguudiig oloh
let numbers = [90, 47, 38, 29, 30, 70, 80, 99, 23, 43, 57];
function findEvenNumbers(input) {
  let evenNumbers = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 == 0) {
      evenNumbers.push(input[i]);
    }
  }
  return evenNumbers;
}
let answer = findEvenNumbers(numbers);
console.log(answer);

// sondgoi nasiig oloh
let ages = [10, 33, 46, 86, 35, 28, 13];
function findOddAges(arr) {
  let oddAges = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      oddAges.push(arr[i]);
    }
  }
  return oddAges;
}
let answer = findOddAges(ages);
console.log(answer);

// zarlagaa ylgaj hevleh
let negative = [-455, 453, 656, -765, 5, -9, 4, 3, -7];
function findNegativeNumber(arr) {
  let negativeNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativeNumbers.push(arr[i]);
    }
  }
  return negativeNumbers;
}
let answer = findNegativeNumber(negative);
console.log(answer);
