//Union
/*
In TypeScript, a union type lets a variable hold values of multiple possible types,
 using the | (pipe) symbol. For example,string | number means the variable can be either a string or a number, but nothing else.
 SYNTAX=> let value: string | number;
 */

const combine = (num1: number | string, num2: number | string) => {
  let result;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  } else {
    result = num1.toString() + " " + num2.toString();
  }
  return result;
};

const sum = combine(50, 50);
const combineName = combine("Suraj", "Singh");
console.log(sum, combineName);

