const student = {
    name: 'shahriar alam',
    age: 22,
    phone: '01860526651',
    money: 2500,

}


// if right side is an object left side of destructuring will be object as well
// use proparty name as a variable that contains the property value

const { name, age, phone, money } = student


// const phone = student.phone;
// const name = student.name;
// const age = student.age;
// const money = student.money


console.log(name, age, phone, money);


// console.log('Student Name : ', name);
// console.log('Student age : ',age);
// console.log('Student Phone : ', phone);
// console.log('Student balance :', money);














/**destructuring form array */
const numbers = [23, 43, 54]
const [first, second, third] = numbers;


/**------------------------------------------------ */
function doubleThem(a, b) {
    return [a * 2, b * 2];
}

const [prothom, ditio] = doubleThem(6, 9);
console.log(prothom, ditio);