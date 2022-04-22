// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe(fib, () => {
    it("returns an array that length containing the numbers of the Fibonacci sequence.") () =>
  expect(fib(6).toEqual([1, 1, 2, 3, 5, 8])

  describe(fib, () => {
      it("returns an array that length containing the numbers of the Fibonacci sequence.") () =>
    expect(fib(10).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])


// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.

//create fib variable
//for fib define num values
//for loop states that the function will act on numbers greater than 2, but less than or equal to the example inputs (6,10). Function will iterate through the given parameters
//return array of 6 and 10 in fib.




// var i
// var fib = []
//
// fib[0] = 0;
// fib[1] = 1;
// for (i = 2; i <= 10; i++) {
//   fib[i] = fib[i - 2] + fib[i - 1]
//   console.log(fib[i])
// }
// --------------------------------------
// var i
// var fib = []
//
// fib[0] = 0;
// fib[1] = 1;
// for (i = 2; i <= 6; i++) {
//   fib[i] = fib[i - 2] + fib[i - 1]
//   console.log(fib[i])
// }

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

// const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// // Expected output: [-823, 7, 23]

describe("filteredNumbers", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.",
  () => }
  expect(filteredNumbers(fullArr1)).toEqual([-9, 7, 9, 199])

  describe("filteredNumbers", () => {
      it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.",
    () => }
    expect(filteredNumbers(fullArr2)).toEqual([-823, 7, 23])


// b) Create the function that makes the test pass.

//Pseudocode
    //make function oddsArray
    //utilize .filter to iterate through original array and return odd values
    //.sort to sort array from least to greatest
    //utilize modulo and index to identify oddvalues ^
    //return array of odd number least to greatest

   const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

    const siftedArray = (array, dataType) => {
       return array.filter(value => {
           return typeof value === number
       })
    }
// //    console.log(sifter(fullArr1, "number"))
//    // ouput
//    const numbersArray = [4, 9, 0, 8, 7, 199, -9]

//    let lowestToHighest = (array.sort((a, b) => a -b)
//    //console.log(lowestToHighest()
//    )
//     needToRefactor = lowestToHighest.filter(value => {
//     return value % 2 !==0
//    })
    //console.log(" need to refactor", needToRefactor)

    onlyOddNums = (array) => {
      return filterNums = array.filter(arrays => typeof arrays === "number" && arrays % 2 !== 0).sort(function(a, b){return a-b})
  }



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accumulatingSum", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.",
  () => }
  expect(numberstoAdd1.toContain([2, 6, 51, 60])

  describe("accumulatingSum", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.",
  () => }
  expect(numbersToAdd2.toContain([0, 7, -1, 11])

describe("accumulatingSum", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.",
  () => }
  expect(numbersToAdd3.toContain([])

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.

const accumulatingSum = (sum => value => sum += value)(0)
//console.log(numbersToAdd1.map(accumulatingSum))
