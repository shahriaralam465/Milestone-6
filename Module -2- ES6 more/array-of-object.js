const products = [
    { id: 1, name: 'lenove', price: 65000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'hp', price: 40000 },
    { id: 4, name: 'mac', price: 140000 },
]

// map
const names = products.map(product => product.name);
// console.log(names);
const price = products.map(product => product.price);
// console.log(price);


// forEach
// products.forEach(p => console.log(p.id));


// filter
const expensive = products.filter(product => product.price > 50000);
// console.log(expensive);


// find
const affordable = products.find(product => product.price < 50000 );
// console.log(affordable);


// reduce 
const total = products.reduce((accumulator, current) => accumulator + current.price , 0)
console.log(total);