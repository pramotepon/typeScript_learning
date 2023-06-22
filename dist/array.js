"use strict";
// const user1:string = "Pramote";
// const user2:string = "Phanon";
// Array
const users = [];
users.push("Pramote");
users.push("Phanon");
console.log(users);
// Loop
users.forEach(element => {
    console.log(element);
});
const employees = [];
employees.push({ name: "Pramote", salary: 50000, department: "Programer" });
employees.push({ name: "Phanon", salary: 40000, department: "DevOpps" });
console.log(employees);
for (const person of employees) {
    console.log(person);
}
