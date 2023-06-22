const person1 = {
    name: "Pramote",
    age: 28
}

const person2: { name: string, age: number } = { name: "Pramote", age: 28 }

console.log(person1, person2);

// Function
function showDetail(data: { name: string, age: number }) {
    console.log(`${data.name} ${data.age}`);
}
showDetail(person2);

// Return object
const randomPosition = (): { lat: number, long: number } => {
    return {
        lat: Math.random(),
        long: Math.random()
    }
}

console.log(randomPosition());
const person3: { name: string, age: number, address: string } = { name: "Pramote", age: 28, address: "Bangkok" }
showDetail(person3);
// showDetail({ name: "Pramote", age: 28, address: "Bangkok" });