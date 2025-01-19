class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}

const jamal = new Person('Jamal Uddin', 21);
// console.log(jamal);
jamal.sleep();


const josim = new Person('Josim uddin', 56);
josim.sleep();




/**Critical */
