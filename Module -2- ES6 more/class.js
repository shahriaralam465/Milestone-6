const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'hp', price: 40000 },
    { id: 4, name: 'mac', price: 140000 },
]

// Every class have properties, method

class Product{
    country = 'bangladesh'
    constructor(name){
       this.name =name; 
    }
    speak(talk){
        console.log(`talking about ${talk}`);
    }
}

const lenovo = new Product('Take this lenovo')
// console.log(lenovo);
// lenovo.speak('a good laptop')






/***************************************************************/


class Teacher {
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is teaching Math');
    }
}

const helal = new Teacher ('Helal uddin ahmed', 'Security');
console.log(helal);

const sisir = new Teacher ('Sisir Ahmed', 'Data Structure');
console.log(sisir);