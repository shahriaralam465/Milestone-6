const glass = {
    name: 'Glass',
    color: 'mixed',
    price: '280',
    isCleaned: true,
}

console.log(glass);

// get property
const keys = Object.keys(glass);
// console.log(keys);
/**[ 'name', 'color', 'price', 'isCleaned' ] */

// get property values
const values = Object.values(glass);
// console.log(values);
/**[ 'Glass', 'mixed', '280', true ] */


// 
const entries = Object.entries(glass);
// console.log(entries);
/**
 * array of array, tow dimensional array
 * [
  [ 'name', 'Glass' ],
  [ 'color', 'mixed' ],
  [ 'price', '280' ],
  [ 'isCleaned', true ]
    ]
*/



const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);

// delete glass.isCleaned;





// freeze
// Object.freeze(glass);
Object.seal(glass);
glass.source = 'bangladesh'
glass.price = 5000;
console.log(glass);