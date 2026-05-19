//=================================================Generic========================

/*
Generics क्या होते हैं ?

Generics TypeScript का ऐसा feature है जिसकी मदद से हम
reusable और type-safe code लिख सकते हैं।

Generics हमें ऐसा function, interface, class, array आदि बनाने देते हैं
जो अलग-अलग data types के साथ काम कर सके।
*/

// Ex ==> 1
const Fruits: Array<string> = [];
Fruits.push("Apple");
Fruits.push("Banana");

console.log("Fruits is", Fruits);

type personObj = {
  name: string;
  age: number;
};

//Ex===> 2
const person: personObj = {
  name: "suraj",
  age: 21,
};

const ObjectTypesArray: Array<personObj> = [];
ObjectTypesArray.push({ name: "sonu", age: 50 });
// ObjectTypesArray.push("cvds") Error
ObjectTypesArray.push({ name: "monu", age: 40 });

console.log("Person", ObjectTypesArray);

// Ex ===>3
function mergerole<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const res = mergerole(
  { name: "suraj", age: "25" },
  { role: "Full Stack Developer" },
);

console.log("Result is", res);

//================================================================Generics Contraints=======================================================

function createObject<T extends string, U extends number, V extends boolean>(
  key: T,
  value: U,
  isActive: V,
): { key: T; value: U; isActive: V } {
  return { key, value, isActive };
}

const result = createObject("1234", 4321, true);
console.log("result is ", result);

//======================================================================Generics in Interface====================================================================

interface boxtype<T> {
  value: T;
}
const numberBox: boxtype<number> = { value: 500 };
const stringBox: boxtype<string> = { value: "This is string box" };
console.log("numberBox is", numberBox);
console.log("stringBox is", stringBox);

//=================================================================Generic Default==================================================
interface User<T = string> {
  data: T;
  status: boolean;
}

let User1: User<number> = { data: 52, status: true };
let User2: User = { data: "vsdvds", status: false }; //Default Genrics
let User3: User<object> = { data: { name: "Sonu" }, status: false };

console.log("User3 is ", User3);

//=====================================================Generics with class======================================
class Container<T> {
  private content: T;
  constructor(content: T) {
    this.content = content;
  }
  getContent(): T {
    return this.content;
  }
}

const res1 = new Container<number>(5);
console.log("res 1 =>", res1);
const res2 = new Container<string>("this is string");
console.log("res 2 =>", res2);
const res3 = new Container<object>({ name: "monu", age: 52 });
console.log("res 2 =>", res3);

//==========================================================Generics with array===============

function arr<T>(ar: T[]): T[] {
  return ar;
}

const r1 = arr<number>([4, 5, 10]);
const r2 = arr<string>(["a", "b", "c"]);
// const r3 = arr<Array>([[455]])
const r3 = arr<object>([{ name: "suraj" }, { age: 12 }]);
console.log(`r1 is ${r1} , r2 is ${r2}`);
console.log("r3 is ", r3);

//=================================================================generic with keyof=========================================
/*keyof TypeScript का keyword है जो किसी object की सभी keys का union type बनाता है। */

function getProperty<T extends object, K extends keyof T>(
  obj: T,
  key: K,
): T[K] {
  return obj[key];
}

const person1 = { name: "raghu", age: 52 };

const resp = getProperty(person1, "age");
console.log("resp is", resp);
