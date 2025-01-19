// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

//access and then show habluder adda
let habluderAdda = data2.data.find(book => book.bookDetails.name === "habluder adda");
console.log(habluderAdda.bookDetails);

// show output Beginner
let beginnerCategory = data2.data.find(book => book.bookCategory === "Beginner");
console.log(beginnerCategory.bookCategory);