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
var User1 = { data: 52, status: true };
var User2 = { data: "vsdvds", status: false }; //Default Genrics
var User3 = { data: { name: "Sonu" }, status: false };
console.log("User3 is ", User3);
//=====================================================Generics with class======================================
var Container = /** @class */ (function () {
    function Container(content) {
        this.content = content;
    }
    Container.prototype.getContent = function () {
        return this.content;
    };
    return Container;
}());
var res1 = new Container(5);
console.log("res 1 =>", res1);
var res2 = new Container("this is string");
console.log("res 2 =>", res2);
var res3 = new Container({ name: "monu", age: 52 });
console.log("res 2 =>", res3);
//==========================================================Generics with array===============
function arr(ar) {
    return ar;
}
var r1 = arr([4, 5, 10]);
var r2 = arr(["a", "b", "c"]);
// const r3 = arr<Array>([[455]])
var r3 = arr([{ name: "suraj" }, { age: 12 }]);
console.log("r1 is ".concat(r1, " , r2 is ").concat(r2));
console.log("r3 is ", r3);
//=================================================================generic with keyof=========================================
/*keyof TypeScript का keyword है जो किसी object की सभी keys का union type बनाता है। */
function getProperty(obj, key) {
    return obj[key];
}
var person1 = { name: "raghu", age: 52 };
var resp = getProperty(person1, "age");
console.log("resp is", resp);
