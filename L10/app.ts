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
