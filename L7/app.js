//Function return type
/*
Definition:
TypeScript में function return type यह बताता है कि आपका function किस प्रकार का value वापस करेगा।
इससे compiler को पहले से पता रहता है कि function का output क्या होगा और अगर गलत type return किया गया तो compile-time error मिल जाएगा।
Syntax => function functionName(param1: type, param2: type): returnType {
  // function body
  return value;
}
*/
// Number return type
function add(num1, num2) {
    return num1 + num2;
}
// String return type
function greet(name) {
    return "Hello " + name;
}
// Union return type
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + " " + b.toString();
    }
}
//Void return type
function logMessage(msg) {
    console.log(msg);
}
//Promise return type (Async function)
// async function fetchData(): Promise <string> {
//   return "Data loaded";
// }
//bed Practice
/*
let combineFun : Function;
combineFun = add;
combineFun = greet;
console.log(`Combine Function ${combineFun(1,2)}`);
*/
//Good Practice
var combineFunction; //return type number 
combineFunction = add;
console.log(combineFunction(50, 50));
//Function type & callback
function handleSum(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
console.log(handleSum(15, 2, function (sum) {
    console.log("Sum is ", sum);
}));
