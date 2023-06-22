// const user1:string = "Pramote";
// const user2:string = "Phanon";

// Array
const users: string[] = []
users.push("Pramote")
users.push("Phanon")

console.log(users);

// Loop
users.forEach(element => {
    console.log(element);
});

// Array and Type Aliases
type Employees = {
    name: string,
    salary: number,
    department: string
}

const employees:Employees[]=[]
employees.push({name:"Pramote", salary: 50000, department:"Programer"})
employees.push({name:"Phanon", salary: 40000, department:"DevOpps"})
console.log(employees);

for (const person of employees) {
    console.log(person);
    
}