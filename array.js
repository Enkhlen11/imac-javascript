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
