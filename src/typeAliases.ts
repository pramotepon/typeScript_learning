type Employee = {
    readonly id: number,
    name: string,
    salary: number
    phone?: string
}
let emp1: Employee = {
    id: 1,
    name: "Pramote",
    salary: 50000,
    phone: "0888888888"
}
console.log(emp1);

// Optional Properties (phone?: string)
let emp2: Employee = {
    id: 2,
    name: "Pramote",
    salary: 50000
}
console.log(emp2);
// Readonly Modifier (readonly id: number,)
// emp2.id = 3