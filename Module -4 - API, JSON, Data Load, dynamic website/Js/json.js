const user = {
    id: 1,
    name: 'Shahriar alam',
    job: 'Web developer'
}

/**
 * javaScript Object Notation(JSON);
*/

const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

//{ id: 1, name: 'Shahriar alam', job: 'Web developer' } // javaScript
//{"id":1,"name":"Shahriar alam","job":"Web developer"}  // JSON sting


const shop = {
    owner: 'Shahriar alam',
    address: {
        street: 'nagar mirganj',
        city: 'rangpur',
        country : 'Bangladesh'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen : true, 
    isNew : false
};

console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);


const jsonObj = JSON.parse(shopJSON);
console.log(jsonObj);