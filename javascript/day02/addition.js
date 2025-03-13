let a = 10;
let b = 20;
const employees = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      department: "Engineering",
      position: "Software Engineer",
      email: "john.doe@example.com",
      salary: 75000,
      isActive: true
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      department: "Marketing",
      position: "Marketing Manager",
      email: "jane.smith@example.com",
      salary: 68000,
      isActive: true
    },
    {
      id: 3,
      name: "Michael Johnson",
      age: 35,
      department: "HR",
      position: "HR Specialist",
      email: "michael.johnson@example.com",
      salary: 60000,
      isActive: false
    },
    {
      id: 4,
      name: "Emily Davis",
      age: 32,
      department: "Finance",
      position: "Financial Analyst",
      email: "emily.davis@example.com",
      salary: 72000,
      isActive: true
    }
  ];
  console.time(`My Loop`);
  for (i = 0; i<= 100; i ++){
    console.log(`Value ${i}`);
  }
  console.timeEnd(`My Loop`);
console.log(`Addtion of ${a} & ${b} is ${a+b}`);
console.error(`Helloo!! Good Morning`);
console.warn(`Helloo!! Good Morning`);
console.assert(4999 > 3456, `False`);
console.assert(4999 < 3456, `True`);
console.table(employees);
console.time();
console.timeEnd();
// alert(`Addtion of ${a} & ${b} is ${a+b}`)