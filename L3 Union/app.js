//Union
/*
In TypeScript, a union type lets a variable hold values of multiple possible types,
 using the | (pipe) symbol. For example,string | number means the variable can be either a string or a number, but nothing else.
 SYNTAX=> let value: string | number;
 */
var combine = function (num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + " " + num2.toString();
    }
    return result;
};
var sum = combine(50, 50);
var combineName = combine("Suraj", "Singh");
console.log(sum, combineName);
var showSignal = function (signal) {
    if (signal === "red") {
        console.log("Stop");
    }
    else if (signal === "green") {
        console.log("GO");
    }
    else if (signal === "yellow") {
        console.log("Ready");
    }
};
showSignal("red");
showSignal("green");
// showSignal("blue") Argument of type '"blue"' is not assignable to parameter of type 'signal'.
