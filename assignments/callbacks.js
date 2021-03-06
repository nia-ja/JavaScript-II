// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });
  
*/

    // Length of the array
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, function(length) {
  console.log(length);
});


    // Last item of the array
function last(arr, cb) {
  return cb(arr[arr.length -1]);
  // last passes the last item of the array into the callback.
}
last(items, function(lastItem) {
  console.log(lastItem);
});



    // Adds two numbers
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}
sumNums(5, 6, function (add) {
  console.log(add);
});




    // Multiplies two numbers
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}
multiplyNums(5, 6, function (multiply) {
  console.log(multiply);
});





function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i=0; list.length > i; i++) {
    if (list[i] === item) {
      return cb(true);
    }
  }
  return cb(false);
}
contains('Notebook', items, function (ifPresent) {
  console.log(ifPresent);
});





/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  let noDuplicates = new Set(array);
  let result = Array.from(noDuplicates);
  return cb(result);
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

removeDuplicates(items, function(result) {
  console.log(result);
})


// const items2 = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Notebook', 'Pencil'];
// removeDuplicates(items2, function(result) {
//   console.log(result);
// })