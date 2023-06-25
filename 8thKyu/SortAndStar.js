// FUNDAMENTALS
// STRINGS
// ARRAYS
// SORTING

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on
// the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// in : ['aze','aze','ere','frfz']
// out :
// alphabetically
// case-sensitive
// the ASCII values of the chars

// test :
// let testArray = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]
// let testArray = [
//   "Anna",
//   "anna",
//   "bitcoin",
//   "Take",
//   "over",
//   "the",
//   "world",
//   "maybe",
//   "who",
//   "knows",
//   "perhaps",
// ];
// let testArrayTwo = ["Anna","anna","bitcoin", "Take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]
// testArray.forEach((x, i) => (testArray[i] = x.toLowerCase()));
// console.log(testArray);
// let sortedArray = testArray.sort();

// let sortedArrayTwo = testArrayTwo.sort()
// console.log(sortedArray);
// console.log(sortedArray[0]);
// console.log(sortedArrayTwo);
function twoSort(s) {
  let sortedS = s.sort();
  let newValue = sortedS[0].split("").join("***");
  return newValue;
}
let s = [
  "Anna",
  "anna",
  "bitcoin",
  "Take",
  "over",
  "the",
  "world",
  "maybe",
  "who",
  "knows",
  "perhaps",
];
console.log(twoSort(s));
