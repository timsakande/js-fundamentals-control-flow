// Don't edit the code below this line up until 'TODO:'
const NUM_ONE = 92837 // eslint-disable-line no-unused-vars
const NUM_TWO = 92827 // eslint-disable-line no-unused-vars
const ARRAY_ONE = [] // eslint-disable-line no-unused-vars
const ARRAY_TWO = ['Hello', 'Conditions', NUM_ONE] // eslint-disable-line no-unused-vars

// TODO: Implement the tasks below to make the tests pass

// 1. Use conditional statements to set answerOne to false if ARRAY_ONE is not empty
// or true if it is empty
const answerOne = true;
if(ARRAY_ONE !== null){
  const answerOne = false;
  console.log(answerOne);
}
else {
const answerOne = true;
console.log(answerOne);
}

// 2. Use conditional statements to set answerTwo to false if ARRAY_TWO is not empty
// or true if it is empty
let answerTwo = false; 

if(ARRAY_TWO !== (['Hello', 'Conditions', NUM_ONE])) {

  const answerTwo = true;
  console.log(answerTwo);
}
else {
  const answerTwo = false;
  console.log(answerTwo.log);
}
// 3. Use conditional statements to set answerThree to true if NUM_ONE is more than NUM_TWO
let answerThree = true;

if(NUM_ONE > NUM_TWO){

  const answerThree = true;
}
else {

  const answerThree = false;
}
// 4. Use conditional statements to set answerFour to true if NUM_ONE or NUM_TWO are included in ARRAY_TWO
let answerFour = true;
if(ARRAY_TWO.includes(NUM_ONE || NUM_TWO)) {
 const answerFour = true;
 console.log(answerFour);
}
else {
  const answerFour = false;
  console.log(answerFour);
}
// Don't edit the code below this line
module.exports = {
  answerOne,
  answerTwo,
  answerThree,
  answerFour
}
