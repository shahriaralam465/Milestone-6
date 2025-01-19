const numbers = [12, 32, 43, 54];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log('the total amount of array is ',total);


const sum = numbers.reduce((accumulate, current) => accumulate + current ,0);
console.log(sum);