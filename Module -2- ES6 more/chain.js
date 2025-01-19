// data access
const data = [{id: 1, name: 'salam', address: 'sirajgonj'}];
// console.log(data[0].address);


const products = {
    count : 5000,
    data : [
        {id: 1, name: 'lenovo laptop', price: 65000},
        {id: 2, name: 'macbook', price: 165000},
    ]
}

// second product price
// console.log(products.data[1].price);



const user = {
    id: 5001, 
    name: 'shahriar',
    address: {
        street:{
            first:'Jb sen, Mahiganj to Domdoma' ,
            second:'Purbo shalbon, rockeya more' ,
            third:'langlu, dakumara, Bogra' ,
        },
        city: 'rangpur',
        
    }
}
// console.log(user.address.street.second);




const user2 ={
    id: 5002,
    name: 'moumita',
    address:{
        city: 'rangpur',
        country : 'Bangladesh'
    }
}

console.log(user.address.street?.second);
console.log(user2.address.street?.second);

