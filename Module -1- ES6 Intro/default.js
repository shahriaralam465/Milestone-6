// default  --> if value is not provided, take this as a default.
function add(num1 = 99, num2 = 0) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

// const sum = add(5, 7);
// const sum = add(1, 8);
const sum = add(5);


function fullName(fist, last = '') {
    const full = fist + ' ' + last;
    return full;
}

function friends(numbs = []){

}

function person( human = {}){

}