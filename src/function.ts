// Function Void 
function sayHi() {
    console.log("Hello world");
}
// Function Parameter 
function meSayHi(name: string) {
    console.log(`Pramote ${name}`);
}
// Function Return 
function getDiscount(): number {
    return 500;
}
// Function Parameter and Return
function sumNumber(a: number, b: number): number {
    return a + b
}
console.log(sumNumber(3, 4));

// Arrow function
const checkNumber = (num: number):string => {
    if (num % 2 === 0) {
        return "เลขคู่"
    } else {
        return "เลขคี่"
    }
}
console.log(checkNumber(10));

// Default parameter
const showEmployee = (name:string, age:number, address:string = "กทม.") => {
    console.log(name, age, address);
}
showEmployee("pramote", 28)
showEmployee("phanon", 28, "นนทบุรี")