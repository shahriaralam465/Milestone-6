function sum(a, b, c) {
    // console.log(arguments); // it only visible in function : not visible out of function
    const args = [...arguments]
    // console.log(args);
    const result = a + b + c;
    return result;
}

const total = sum(12, 23, 34, 65, 76, 8, 78);
// console.log(total);

console.log(sum.length);