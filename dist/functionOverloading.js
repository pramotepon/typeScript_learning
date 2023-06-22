"use strict";
// function sayHi(): string {
//     return `Hello TypeScript`
// }
// function sayHi(name:string): string {
//     return `Hello ${name}`
// }
console.log(sayHi("Pramote"));
function sayHi(name) {
    if (!name) {
        return `Hello TypeScript`;
    }
    if (typeof name == "string") {
        return `Hello ${name}`;
    }
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
}
console.log(sayHi());
function total(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    if (typeof a == "string" && typeof b == "string") {
        return (parseInt(a) + parseInt(b)).toString();
    }
    throw new Error("ชนิดข้อมูลไม่ถูฏต้อง");
}
console.log(total(100, 200));
console.log(total("100", "200"));
