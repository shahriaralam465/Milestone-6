/**
 * const people = [
 *  {name: 'meena', age: 20},
 *  {name: 'rina', age : 15},
 *  {name: 'jina', age : 22}
 * ];
 * 
 * follow above array of objects. So, you have 3 objects as array element. 
 * Can You find out the total sum from here ?
 *  20+15+22 = 57. The output will be 57
 * 
 * What are you thinking ? yeah do it with for loop. i Know you can do it.
 * But! wait! wait! do the same task using array.reduce() method
*/


const people = [
    { name: 'meena', age: 20 },
    { name: 'rina', age: 15 },
    { name: 'jina', age: 22 }
]

let sumOfAges = 0;

for (let i = 0; i < people.length; i++) {
    sumOfAges = sumOfAges + people[i].age;
}

console.log('Sum of the ages : ' ,sumOfAges);





const total = people.reduce((accumulate, womens) => accumulate + womens.age, 0);
console.log(total);