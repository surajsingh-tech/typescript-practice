/*
🔹 Sabse common primitive types
number → numbers (1, 2.5, etc.)
string → text ("hello")
boolean → true / false
null
undefined
🔹 Other important types (bahut use hote hain)
any → kuch bhi ho sakta hai (avoid karna better hota hai)
unknown → safer version of any
void → function kuch return nahi karta
never → kabhi return nahi hota (error ya infinite loop)
🔹 Complex / Advanced types (real projects mein important)

array

let nums: number[] = [1, 2, 3];

tuple

let user: [string, number] = ["Suraj", 21];

object

let obj: { name: string; age: number };

union (multiple types allow karta hai)

let id: string | number;

interface (structure define karta hai)

interface User {
  name: string;
  age: number;
}

type (custom type bana sakte ho)

type ID = string | number;

enum

enum Role {
  Admin,
  User
}
*/

function num(a: number, b: number, c: boolean, sometext: string) {
  if (c) {
    console.log(`${sometext} ${a + b}`);
  } else {
    console.log(`${sometext} ${a + b}`);
  }
}

let aa = 5;
let bb = 52;
let cc = true;
let dd = "Sum of Two number is : ";
num(aa, bb, cc, dd);
