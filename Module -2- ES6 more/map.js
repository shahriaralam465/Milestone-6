/**
 * Objectives;
 * 1. we will make every number double
 * 2. we will make square
 * 3. 
*/


const numbers = [32, 43, 54, 56, 65];

function doubleIt(num) {
    console.log('number was', num);
    return num * 2;
}


/**
 * What does "map" do?
 * Loops through each element of the array
 * and do the operation that you passed in the call back function
 * and hold the result from each operation in an array 
 * and finally returns you the array
 * 
*/

const result = numbers.map(doubleIt);
// console.log('Number Now', result);

const double2 = n => n * 2;
const output = numbers.map(double2)
// console.log(output);

const output2 = numbers.map(n => n * 2);
console.log(output2)


// const doubled = [];
// for(const num of numbers){
//     const double = num *2;
//     doubled.push(double);
// }
// console.log('The Doubled Value of the numbers , ', doubled);
/**output : The Doubled Value of the numbers ,  [ 64, 86, 108, 112, 130 ] */


