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
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// String return type
function greet(name: string): string {
  return "Hello " + name;
}

// Union return type
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + " " + b.toString();
  }
}

//Void return type
function logMessage(msg: string): void {
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
let combineFunction : (a:number,b:number)=>number;  //return type number 

combineFunction=add;

console.log(combineFunction(50,50));


//Function type & callback
function handleSum(n1:number,n2:number,cb:(num:number)=>void){
  const result = n1+n2;
  cb(result)
}

console.log(handleSum(15,2,(sum)=>{
  console.log("Sum is ",sum);
}));

/*
never Return Type
Definition => never का मतलब है – “यह function कभी भी कोई value return नहीं करेगा।”  
यह तब होता है जब function हमेशा error throw करता है या infinite loop चलता है।
*/
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    console.log("Running...");
  }
}
