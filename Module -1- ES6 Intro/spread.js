const max = Math.max(6, 3, 4, 5, 65, 76, 7, 3);
const numbers = [3, 43, 54, 65, 76, 87, 45, 5, 6];
const arrayMax = Math.max(...numbers);

// console.log(arrayMax);
console.log(arrayMax);


// use spread operator to copy 
const nums = [12, 32, 43, 54];
const nums2 = nums;

const common = [...nums];

nums2.push(12);

console.log(common);
console.log(nums);




// advance
const number = [...nums, 34];
console.log(number);