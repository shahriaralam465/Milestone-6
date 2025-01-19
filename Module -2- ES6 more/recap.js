/**
 * 1. var let const
 * 2. let const ==> block scope
 * 3. default parameter
 * 4. template string 
 * 5. arrow function
 * 6. destructuring & spread operators
 * 7. Object.keys, Object.values, Object.entries
 * 8. for of: used in array and string,
 * 9. for in loops used in object 
 */

const a = 56;
const number = [23, 44, 54];

const person = {
    name: 'shahriar alam'
}

const message = `Hi, ${person.name} has a: ${a} access to ${number[2]}`;


// arrow function
const square = x = x * x;
const sum  = (a, b) = a +b;


const {age, z, ...others} = {x: 2, y: 5, z: 3, name : 'shahriar', age: 21}

const[first, second, ...remaining] =['sajid','sarjis', 'alam', 'siam', 'sahjahan' ]