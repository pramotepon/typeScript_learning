// function total1(a: number, b: number): number {
//     return a + b
// }
// function total2(a: number, b: number, c: number): number {
//     return a + b + c
// }
// console.log(total1(100, 200));
// console.log(total2(100, 200, 300));

// Rest Parameter
const totalN = (...numbers: number[]) => {
    return numbers.reduce((result, curr) => result + curr);
}

console.log(totalN(100, 200));
console.log(totalN(100, 200, 300));