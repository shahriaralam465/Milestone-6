/**
 * You have an odd array (array with odd numbers). [ 1. 3. 5. 7. 9 ].
 * Now convert this array into an even array (array with even numbers). [ 2, 4, 6, 8. 10]
 * Do this using for loop & array.map()method
 * Hints: add one to any odd number and it will become an even number.
 */

let oddArray = [1, 3, 5, 7, 9];
let evenArray = [];

for(let i = 0; i < oddArray.length; i ++){
    // console.log(oddArray);
    evenArray.push(oddArray[i] + 1);
}

console.log(evenArray);


let mapOddArray = [1, 3, 5, 7, 9];
let mapEvenArray = mapOddArray.map(n => n + 1);

console.log(mapEvenArray);