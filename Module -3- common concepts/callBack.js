function greetings(greetingHandler, name) {
    greetingHandler(name);
}
// const name = 'hamim mama'
// const number = [20, 34, 54, 65];
// const laptop = { price: 45000, brand:'dell'}

function greetingHandler(name) {
    console.log('Greeting handler added', name)

}


function greetEvening(name) {
    console.log('Good Evening :', name)
}


function greetNight(name) {
    console.log('Good Night: ', name)
}


greetings(greetingHandler, 'Tom Hanks');
greetings(greetingHandler, 'Tom Kupar')
greetings(greetingHandler, 'Tom Cruise')


greetings(greetEvening, 'The sun set of bangladesh is so beautiful')
greetings(greetNight, 'Night Sky in bangladesh are so beautiful')



function submitHandler() {
    console.log('submit button clicked')
}

// document.getElementById('btn-submit').addEventListener('click',submitHandler)