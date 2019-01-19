// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function iAmHungry () {
  const hungry = "I want";
  console.log(`${hungry} to eat`);
  apple();
  function apple () {
    console.log(`${hungry} an apple`);
    thirsty();
    function thirsty () {
      console.log(`${hungry} to drink`);
    }
  }
}
iAmHungry();


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  const increment = () => {
    counter = counter + 1;
    return counter;
  }
  return increment;
};
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log("end")



// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====


// let counterFactory = () => {
//   let cntr = 0;
//   const count = (oper) => {
//     if (oper === "+") {
//       cntr = cntr + 1;
//       return cntr;
//     } else if (oper === "-") {
//       cntr = cntr - 1;
//       return cntr;
//     } else {
//       return cntr;
//     }
//   }
//   return count;
// }

// const newCntr = counterFactory();
// console.log(newCntr("+")); //1
// console.log(newCntr("+")); //2
// console.log(newCntr("+")); //3
// console.log(newCntr("-")); //2
// console.log(newCntr("+")); //3
// console.log(newCntr("-")); //2
// console.log(newCntr("-")); //1
// console.log(newCntr("-")); //0
// console.log(newCntr("-")); //-1




function counterFactory() {
  let currentValue = 0;
  const increment = function() {
    currentValue = currentValue + 1;
    console.log(currentValue);
  };
  const decrement = function() {
    currentValue = currentValue - 1;
    console.log(currentValue);
  }
  return {increment: increment,
          decrement: decrement};
}

var myCounter = counterFactory();
myCounter.increment(); //1
myCounter.increment(); //2
myCounter.decrement(); //1
myCounter.increment(); //2
myCounter.decrement(); //1
myCounter.increment(); //2
myCounter.increment(); //3
myCounter.increment(); //4
myCounter.increment(); //5
myCounter.decrement(); //4
myCounter.decrement(); //3
myCounter.decrement(); //2
myCounter.decrement(); //1
myCounter.decrement(); //0
myCounter.decrement(); //-1


  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.