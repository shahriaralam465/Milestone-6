// console.log(1);
// console.log(2);
//  setTimeout(() => {
//     console.log(3)
//  })
// setTimeout(() => {
//     console.log(3)
// }, 4000);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);



let i = 0;
const clockID = setInterval(() => {
    i++;
    // i = i + 1;
    // i += 1;

    if (i > 6) {
        clearInterval(clockID)
    }
    console.log( i)
}, 2000)

