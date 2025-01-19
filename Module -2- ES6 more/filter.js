/**  
 * what does "filter do ?"
 * 1. filter selects elements based on a condition and returns an array with the element that fulfilled the conditions
*/
const numbers = [12, 2, 43, 54, 5, 77];
const players = [76, 54, 56, 87, 89];
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 90);
// const selected = players.filter(p => p > 50);

// const selected = players.filter(p => p % 2 === 1);
const selected = players.filter(p => p % 2 !== 1);
console.log(selected);


const friends = ['tom', 'michael', 'oliver'];
const oddFriends = friends.filter(friend => friend.length > 4)
console.log(oddFriends);