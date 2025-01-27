console.log('synchronous_1');

setTimeout(function timeOut() {
    console.log('asynchronous_1');
}, 5000)


console.log('synchronous_2');
setTimeout(function timeOut() {
    console.log('asynchronous_2');
}, 10000)


console.log('synchronous_3');
// setTimeout(function timeOut(){
//     console.log('asynchronous_1');
// },15000)