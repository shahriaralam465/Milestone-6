/**  
 * truth
 * 1. true
 * 2. any number (+ve, -ve) will be truth other than 0
 * 3. any string will be truth than empty string
 * 4. "0"
 * 5. {} empty object , full object will be truth
 * 6. [] empty array, array will be truthy
 * 
 * 
 * False:
 * 1. false
 * 2. 0
 * 3. '' (empty string)
 * 4. undefined
 * 5. null
*/


// const x = 'false';
let x = [];
console.log(x);
if (x) {
    console.log('value of x is truthy ');
}
else {
    console.log('value of x is falsy')
}

// optional
// check falsy
const y = null;
if(!x){
    console.log('check value is falsy');
}


// check truthy
const z = {class: 9, roll: 607458};
if(!!x){
    console.log('check value is truthy')
}