// Problem 1.

/**
 * 1. write an arrow function that will take 3 parameter, will multiply the parameter and will return the result.
 */

const add3 = (a, b, c) => a + b + c;
const result = add3(10, 20, 30);
// console.log(result);


/**
 * 2. write the following sentence in three lines and print the result: "I am a web developer. I love to code. I love to eat Biryani".
 */

const make3line = `
    I am a developer.
    I love to code.
    I love to eat biryani
`
// console.log(make3line);


/**
 * 3. write an arrow function  that will take 2 parameter: One parameter will come form you and the other parameter will be default parameter. Add these parameter and return the result.
 */

const add = (num1, num2 = 20) => num1 + num2;
const result2 = add(10);
console.log(result2);



/**------------------------------------------------------------------------------------------------------ */

// problem 2.
/** 
 * Write arrow function where it will do the following:
 * a) It will take an array where the array elements will be the name of your friends
 * b) check if the length of each element is even, push elements with even length to a new array and return the result.
 * 
 * print the result
 * 
*/


const getEvenLengthNames = (friends) => {
    const isEvenLength = (name) => name.length % 2 === 0;
    const evenLengthNames = friends.filter(isEvenLength);
    return evenLengthNames;
}

const friends = ['Sobuj', 'Nahid', 'Nasir', 'Riyad', 'Sazzad', 'Akash', 'Fahim'];
const result3 = getEvenLengthNames(friends);
// console.log(result3);



/**
 * write an arrow function where it will do the following:

    a) square each array element
    b) calculate the sum of the squared elements
    c) Return the average of the sum of the squared elements

    print result
*/


const calculateAverageOfSquaredElements = (arr) => {
    const squaredArray = arr.map(num => num * num);
    // Calculate the sum of squared elements
    const sumOfSquares = squaredArray.reduce((sum, num) => sum + num, 0);
    return sumOfSquares / arr.length;

};

const numbers = [1, 2, 3, 4, 5];
const result4 = calculateAverageOfSquaredElements(numbers);
console.log("Average of squared elements:", result4);