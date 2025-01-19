const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;




/**Single or one parameter */
const getAge = (person) => person.age;
const student = { name: 'jamal', age: 23 }
const age = getAge(student);
// console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([12, 32, 3, 43, 54]);
// console.log(third);

const doubleIt = num => num * 2;
const num = doubleIt(23);
// console.log(num);





/**No parameter */
getPI = () => Math.PI;
// console.log(getPI());


/**large arrow function. if you want to get anything returned form this function. then you have to use the return keyword */
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;

    return result;
}

console.log(doMath(3, 3, 4));