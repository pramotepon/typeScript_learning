// const section: string[] = ["บัญชี", "การเงิน"]
// const departments: string[] = ["โปรแกรมเมอร์", "การตลาด", "กราฟิก"]

const section = ["บัญชี", "การเงิน"]
const departments = ["โปรแกรมเมอร์", "การตลาด", "กราฟิก"]

departments.push(...section)
console.log(departments);
