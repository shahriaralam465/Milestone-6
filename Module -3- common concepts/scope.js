function add(a, b) {
    const total = a + b;
    console.log(a, b);
    if (b > 5) {
        const sum = 23 + a + b;
    }
    else {
        const sum = 5 + a + b;
        var current = sum;
    }
    console.log(current);
    return total;

}
const total = add(5, 6);
console.log(total);