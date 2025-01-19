/**
 * for of use on array or string not in object
 * for in use on object not string and array
 */


const numbers = [2, 3, 4, 5, 7, 8, 5];
// for (let i = 0; i < numbers.length; i++) { 
// };

// while

for(const num of numbers){
    // console.log(num);
}

const king = 'shiraj uddoula';
for (const char of king){
    // console.log(char);
}




// object
const glass = {
    name: 'Glass',
    color: 'mixed',
    price: '280',
    isCleaned: true,
}

for(const keys in glass){
    const value = glass[keys];
    // console.log(keys, value);
}



// Optional
const keys = Object.keys(glass);
console.log(keys);

for(key of keys){
    const value = glass[key];
    console.log(key, value);
}