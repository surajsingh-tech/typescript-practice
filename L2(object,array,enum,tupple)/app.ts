// Object , Array , enum , tuple

// OBJECT with nested obj
const personDetails: {
  name: String;
  lastName: string;
  age: number;
  active: boolean;
  address: {
    pinCode: number;
    city: string;
  };
} = {
  name: "Suraj",
  lastName: "Sing Bangari",
  age: 25,
  active: true,
  address: {
    pinCode: 263659,
    city: "almora uttarakhand",
  },
};

console.log("Obj", personDetails);

// ARRAY

let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Suraj", "Rahul"];
console.log("arr with simple value", names[0]); // Suraj

//Agar tum simple any[] use karoge:
// let arr: any[] = [1, "hi", true, {}]; its woke but ❌ but TypeScript ka fayda khatam ho jayega (no type safety)

let arr: (number | string | boolean | { name: string })[] = [
  10,
  "hello",
  true,
  { name: "Suraj" },
];

console.log(`Array with multiple value`, arr);

/* Tupple 
A tuple is a special type of array in TypeScript where:

length is fixed
types are fixed
order matters //It means har position ka apna specific type hota hai.
*/

const details: {
  firstName: string;
  age: number;
  skillsAndExp: [string, number]; //Fixed array of two types
} = {
  firstName: "Suraj",
  age: 25,
  skillsAndExp: ["react", 1],
};

console.log("Tupple Data", details);

//Enum

enum Role {
  "user",
  "admin",
  "Super Admin",
}
const person1: {
  name: string;
  age: number;
  skills: ["React", "Node"];
  skillsAndExp: [string, number];
  role: Role; //enum
} = {
  name: "Suraj",
  age: 25,
  skills: ["React", "Node"],
  skillsAndExp: ["full stack Development", 1],
  role: Role.user,
};

if (person1.role === Role.user) {
  console.log("this is user");
} else if (person1.role === Role.admin) {
  console.log("this is admin");
} else if (person1.role === Role["Super Admin"]) {
  console.log("this is Super Admin");
}
