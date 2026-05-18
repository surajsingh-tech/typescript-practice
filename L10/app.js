//=================================================Generic========================
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/*
Generics क्या होते हैं ?

Generics TypeScript का ऐसा feature है जिसकी मदद से हम
reusable और type-safe code लिख सकते हैं।

Generics हमें ऐसा function, interface, class, array आदि बनाने देते हैं
जो अलग-अलग data types के साथ काम कर सके।
*/
// Ex ==> 1
var Fruits = [];
Fruits.push("Apple");
Fruits.push("Banana");
console.log("Fruits is", Fruits);
//Ex===> 2
var person = {
    name: "suraj",
    age: 21,
};
var ObjectTypesArray = [];
ObjectTypesArray.push({ name: "sonu", age: 50 });
// ObjectTypesArray.push("cvds") Error
ObjectTypesArray.push({ name: "monu", age: 40 });
console.log("Person", ObjectTypesArray);
// Ex ===>3
function mergerole(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
var res = mergerole({ name: "suraj", age: "25" }, { role: "Full Stack Developer" });
console.log("Result is", res);
//================================================================Generics Contraints=======================================================
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
var result = createObject("1234", 4321, true);
console.log("result is ", result);
var numberBox = { value: 500 };
var stringBox = { value: "This is string box" };
console.log("numberBox is", numberBox);
console.log("stringBox is", stringBox);
