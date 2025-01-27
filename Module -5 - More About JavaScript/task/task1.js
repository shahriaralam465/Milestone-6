/**
 * Practice task -1
    a) Write a function that displays a message after 5s.
    b) Write a function called delayedGreeting() that takes two parameters,name and delay time, and logs a greeting message after the given delay time.

    Input:
    delayGreeting('Alice', 2000)

    Output:
    Hello, Alice!

 */


function displayMessage() {
    setTimeout(() => {
        console.log('This is a delayed message');
    }, 5000)
}

displayMessage()


function delayGreeting(name, delayTime) {
    setTimeout(() => {
        console.log('hello' + ' , ' + name)
    }, delayTime);
}
delayGreeting('Alice', 2000);
