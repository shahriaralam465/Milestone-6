/**
 * You are given an array say : [33, 50, 79, 90, 101, 20].
 * Now return/get all the elements which are divisible by 10 
 * using array.filter() method;
 */

const numbers = [33, 50, 79, 90, 101, 20];

const selected = numbers.filter(n => n % 10 === 0);
console.log('Get the value which is divided by 10  by using filter ',selected);



const findSelected = numbers.find(n => n%10 === 0);
console.log('Get the value divisible by 10 using find() method ', findSelected);