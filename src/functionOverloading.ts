// function sayHi(): string {
//     return `Hello TypeScript`
// }

// function sayHi(name:string): string {
//     return `Hello ${name}`
// }

console.log(sayHi("Pramote"));

// Function Overloading
function sayHi(): string
function sayHi(name: string): string

function sayHi(name?: unknown): unknown {
    if (!name) {
        return `Hello TypeScript`
    }
    if (typeof name == "string") {
        return `Hello ${name}`
    }
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
}
console.log(sayHi());

// function total(a: number, b: number): number {
//     return a + b;
// }
// function total(a: string, b: string): string {
//     return (parseInt(a) + parseInt(b)).toString();
// }

function total(a: number, b: number): number
function total(a: string, b: string): string
function total(a: unknown, b: unknown): unknown {
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