// Object , Array , enum , tuple
// OBJECT with nested obj
var personDetails = {
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
var numbers = [1, 2, 3, 4];
var names = ["Suraj", "Rahul"];
console.log("arr with simple value", names[0]); // Suraj
//Agar tum simple any[] use karoge:
// let arr: any[] = [1, "hi", true, {}]; its woke but ❌ but TypeScript ka fayda khatam ho jayega (no type safety)
var arr = [
    10,
    "hello",
    true,
    { name: "Suraj" },
];
console.log("Array with multiple value", arr);
/* Tupple
A tuple is a special type of array in TypeScript where:

length is fixed
types are fixed
order matters //It means har position ka apna specific type hota hai.
*/
var details = {
    firstName: "Suraj",
    age: 25,
    skillsAndExp: ["react", 1],
};
console.log("Tupple Data", details);
//Enum
var Role;
(function (Role) {
    Role[Role["user"] = 0] = "user";
    Role[Role["admin"] = 1] = "admin";
    Role[Role["Super Admin"] = 2] = "Super Admin";
})(Role || (Role = {}));
var person1 = {
    name: "Suraj",
    age: 25,
    skills: ["React", "Node"],
    skillsAndExp: ["full stack Development", 1],
    role: Role.user,
};
if (person1.role === Role.user) {
    console.log("this is user");
}
else if (person1.role === Role.admin) {
    console.log("this is admin");
}
else if (person1.role === Role["Super Admin"]) {
    console.log("this is Super Admin");
}
