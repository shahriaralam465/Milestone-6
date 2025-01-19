/***
 * primitive types are pass by value
*/

let num1  = 5;
let num2  = 7;

function multiply (a, b){
    a = 23;
    const result = a * b;
    return result;
}

console.log(num1)
const output = multiply(num1, num2);
console.log(output)



/**
 * object and array are pass by reference
 */
let student1 = { name: 'shahriar', favorite:'PC'};
let student2 = { name: 'Sazzad', favorite:'Laptop'};


function makeFavorite(person1, person2 ){
    person1.name = 'soikot';
    person2.name = 'Hossen';
}
console.log(student1, student2);
makeFavorite(student1, student2);
console.log(student1, student2)