/**
 * 8 Ways to get undefined
 * 
 * 1. Variable that is not initialized will give undefined
 * 2. function with no return 
 * 3. parameter that is not passed will be undefined
 * 4. if return has nothing on the right side will return undefined
 * 5. property that doesn't exist  on an object will give you undefined
 * 6. accessing array elements outside of the index range
 * 7. deleting an element inside an array
 * 8. set a value directly to undefined
*/

// 1.Variable that is not initialized will give undefined
// let first;
// console.log(first);


/**2. function with no return  */
// function second (a, b){
//     const total = a + b;
// }
// const result = second();
// console.log(result);



/** 3. parameter that is not passed will be undefined */
// function third(a, b, c, d) {
//     const total = a + b + c + d;
//     console.log(a, b , c, d);
// }

// third(2, 5)



/** 4. if return has nothing on the right side will return undefined */
// function noNegative(a, b) {
//     if (a < 0 || b < 0){
//         return;
//     }
//     return a + b;
// }

// const total = noNegative(2, -5);
// console.log(total);


/**5. property that doesn't exist  on an object will give you undefined */
const fifth = {id: 2, name: 'abrar', age: 40}
// console.log(fifth.age, fifth.salery);


const sixth = [3, 545, 56, 76, 86];

// we should not do it. Instead use splice
delete sixth[1];
// console.log(sixth[1], sixth[3]);


/** 8. set a value directly to undefined */
const eighth = undefined;

// we should do 
const ninth = null;
const data ={result: [], undated: null}
console.log(typeof null);