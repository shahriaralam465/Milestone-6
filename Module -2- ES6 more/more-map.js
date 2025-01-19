const numbers = [12, 10, 3, 32];

const doubled = numbers.map(num => num * 2)
// console.log(doubled);

const fiveAdd = numbers.map(num => num + 5);
// console.log(fiveAdd);

const halves = numbers.map(num => num / 2);
// console.log(halves);




const friends = ['tom', 'michael', 'oliver'];
const length = friends.map(frnd => frnd.length);
// console.log(length);
const firstLetter = friends.map(friend =>friend[0]);
console.log(firstLetter);