"use strict";
// Function Void 
function sayHi() {
    console.log("Hello world");
}
// Function Parameter 
function meSayHi(name) {
    console.log(`Pramote ${name}`);
}
// Function Return 
function getDiscount() {
    return 500;
}
// Function Parameter and Return
function sumNumber(a, b) {
    return a + b;
}
console.log(sumNumber(3, 4));
// Arrow function
const checkNumber = (num) => {
    if (num % 2 === 0) {
        return "เลขคู่";
    }
    else {
        return "เลขคี่";
    }
};
console.log(checkNumber(10));
// Default parameter
const showEmployee = (name, age, address = "กทม.") => {
    console.log(name, age, address);
};
showEmployee("pramote", 28);
showEmployee("phanon", 28, "นนทบุรี");
