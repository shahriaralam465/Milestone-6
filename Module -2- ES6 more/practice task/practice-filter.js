/**
 * You have an array Of objects:
 * const instructor = [
        {name: 'Nodi', age:28, position:'Senior'},
        {name: 'Akil', age:26, position:'Junior'},
        {name: 'Shobuj, age:30, positien:'Senior'}
    ]
 * Your task i sto display the instructor names that has the position senior using filter
*/

const instructors = [
    { name: 'Nodi', age: 28, position: 'Senior' },
    { name: 'Akil', age: 26, position: 'Junior' },
    { name: 'Shobuj', age: 30, position: 'Senior' }
]

const seniors = instructors.filter(instructor => instructor.position === 'Senior');
const names = seniors.map(instructor => instructor.name);

console.log(names);