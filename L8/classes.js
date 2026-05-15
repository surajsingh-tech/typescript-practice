// Class in TypeScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Basic Class
/*
TypeScript में class एक blueprint होता है जिससे आप objects बना सकते हैं।
 यह OOP (Object-Oriented Programming) की तरह काम करता है और इसमें properties (data) और methods (functions) दोनों define किए जा सकते हैं।
*/
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.printDepart = function () {
        console.log("Department name is ", this.name);
    };
    return Department;
}());
var depart = new Department("IT");
depart.printDepart();
// Private Public access modyfiers
/*
TypeScript में Access Modifiers का इस्तेमाल class की properties और methods की visibility
(कहाँ-कहाँ access कर सकते हैं) को control करने के लिए किया जाता है।

public => Default होता है। Property या method हर जगह accessible होती है (class के अंदर, बाहर, और inherited classes में)।
*/
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.showBrand = function () {
        console.log("Car brand is ".concat(this.brand));
    };
    return Car;
}());
var car1 = new Car("Tesla");
console.log(car1.brand); // ✅ Accessible
car1.showBrand(); // ✅ Accessible
/*
                                                //Private


private => Property या method सिर्फ उसी class के अंदर accessible होती है। Class के बाहर या inherited class में access नहीं कर सकते।
 
*/
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccount.prototype.calculateInterest = function () {
        return this.balance * 0.05;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance + this.calculateInterest();
    };
    return BankAccount;
}());
var account = new BankAccount(1000);
console.log(account.getBalance()); // ✅ Accessible
// console.log(account.balance);   ❌ Error (private)
//Readonly
/* Readonly => TypeScript में readonly keyword का इस्तेमाल properties को immutable (unchangeable) बनाने के लिए किया जाता है। यानी एक बार value assign हो जाने के बाद उसे बदला नहीं जा सकता। */
var User = /** @class */ (function () {
    function User(id, name) {
        this.id = id; // ✅ constructor में assign कर सकते हैं
        this.name = name;
    }
    return User;
}());
var user1 = new User(101, "Suraj");
console.log(user1.id); // ✅ Output: 101
user1.name = "Rahul"; // ✅ Allowed
// user1.id = 102;       ❌ Error: Cannot assign to 'id' because it is a read-only property
//Inheritance
/* TypeScript में Inheritance का मतलब है कि एक class दूसरी class की properties और
methods को reuse कर सकती है। इससे code दुबारा लिखने की ज़रूरत नहीं पड़ती और reusability बढ़ती है। */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        console.log("".concat(this.name, " is moving..."));
    };
    return Animal;
}());
// Inheritance (Dog extends Animal)
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}(Animal));
var dog1 = new Dog("Tommy");
dog1.move(); // ✅ Inherited method
dog1.bark(); // ✅ Own method
//Super Keyword
/*TypeScript में super एक कीवर्ड है जिसका उपयोग child class के अंदर parent class के constructor या methods को कॉल करने के लिए किया जाता है। */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, jobTitle) {
        var _this = _super.call(this, name) || this; // ✅ calls Person’s constructor
        _this.jobTitle = jobTitle;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee("Suraj", "Developer");
console.log(emp.name); // Suraj
//Setter and Getter
/*
In TypeScript, getter and setter methods are special functions that allow you to control how properties of a class are accessed and updated.
 They provide encapsulation and let you add logic when reading or writing values.
*/
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Object.defineProperty(Rectangle.prototype, "area", {
        get: function () {
            return this.width * this.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "setWidth", {
        set: function (w) {
            if (w <= 0)
                throw new Error("width must be positive");
            this.width = w;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}());
var rect = new Rectangle(10, 5);
console.log(rect.area);
rect.setWidth = 0;
console.log(rect.area);
