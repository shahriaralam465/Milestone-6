// Var : no reason to use var anymore
// let : Allow it to reassign
// Const : do not allow it to reassign


const money = 25;
const rich = money + 50;

console.log(rich);


let count = 0;
count = count + 10;

console.log(count);



const numbers = [12, 32, 43, 54, 56, 76];
numbers[1] = 45;

numbers.push(21, 23, 43);
console.log(numbers);



// object
const student = {
    name: 'shahriar alam',
    class: '7th semester'
}


student.name = 'Shahriar Alam Soikot'
console.log(student);

