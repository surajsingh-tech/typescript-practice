// ========================== INTERFACE ==========================

/*
 Interface TypeScript में एक contract है जो किसी object की structure define करता है।
 यह बताता है कि object में कौन-कौन सी properties और methods होंगी।
 Interface सिर्फ rules define करता है, implementation नहीं।
*/

interface Student {
  id: number;
  name: string;
  course: string;
  showDetails(): void;
}

let student: Student = {
  id: 101,
  name: "Suraj",
  course: "BCA",

  showDetails() {
    console.log(`ID: ${this.id}, Name: ${this.name}, Course: ${this.course}`);
  },
};

student.showDetails();

// ============================ TYPE ============================

/*
 Type भी TypeScript में custom type बनाने के लिए use होता है।
 Type सिर्फ object ही नहीं बल्कि string, number, array,
 function, union आदि को भी define कर सकता है।
*/

type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

let user: User = {
  id: 1,
  name: "Rahul",
  isAdmin: true,
};

console.log(user);

// ====================== WHERE WE USE TYPE ======================

/*
 1. Object type define करने के लिए
 2. Union type बनाने के लिए
 3. Array type define करने के लिए
 4. Function type define करने के लिए
*/

// ---------- 1. Object Type ----------

type Product = {
  title: string;
  price: number;
};

let product: Product = {
  title: "Laptop",
  price: 50000,
};

// ---------- 2. Union Type ----------

type Status = "success" | "error" | "loading";

let apiStatus: Status = "success";

// ---------- 3. Array Type ----------

type Numbers = number[];

let marks: Numbers = [10, 20, 30];

// ---------- 4. Function Type ----------

type Add = (a: number, b: number) => number;

let sum: Add = (x, y) => {
  return x + y;
};

console.log(sum(10, 20));

// ================= INTERFACE vs TYPE =================

/*
Interface:
✔ Mostly objects/classes के लिए use होता है
✔ Extend करना आसान होता है

Type:
✔ हर तरह की type बना सकता है
✔ Union, Array, Function आदि define कर सकता है
✔ ज्यादा flexible होता है
*/

//===================================================Interface in class================================

interface greet {
  name: string;
  greet(msg: string): void;
}

class birthday implements greet {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  greet(msg: string): void {
    console.log(`${this.name} ${msg}`);
  }
}

const bdy = new birthday("Suraj");
bdy.greet("are invited for bdy party");

//==========================================ReadOnly in js========================================================
interface Users {
  readonly name: string;
  age: number;
}

const users: Users = {
  name: "suraj",
  age: 25,
};

// users.name="sonu" Error => Cannot assign to 'name' because it is a read-only property.

//===================================================array ,function ,string in Interface===========================

interface User1 {
  name: string; // string
  skills: string[]; // array
  greet(msg: string): void; // function
}

const user1: User1 = {
  name: "Suraj",

  skills: ["HTML", "CSS", "TypeScript"],

  greet(msg: string) {
    console.log(`${msg} ${this.name}`);
  },
};

console.log(user1.name);

console.log(user1.skills);

user1.greet("Hello");

//======================================Optional ? in Interface=========================
/* TypeScript me optional property ka matlab hota hai ki object me wo property ho bhi sakti hai aur nahi bhi.
Optional property ko ? se define karte hai. */

interface User4 {
  name: string;
  age?: number;
}

const user11: User4 = {
  name: "Suraj",
  age: 21,
};

const user2: User4 = {
  name: "Rahul",
};

//Dono valid hain because age optional hai.
