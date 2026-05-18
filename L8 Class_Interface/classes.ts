// Class in TypeScript

//Basic Class

/*
TypeScript में class एक blueprint होता है जिससे आप objects बना सकते हैं।
 यह OOP (Object-Oriented Programming) की तरह काम करता है और इसमें properties (data) और methods (functions) दोनों define किए जा सकते हैं।
*/
class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  printDepart() {
    console.log("Department name is ", this.name);
  }
}

const depart = new Department("IT");
depart.printDepart();

// Private Public access modyfiers

/*
TypeScript में Access Modifiers का इस्तेमाल class की properties और methods की visibility 
(कहाँ-कहाँ access कर सकते हैं) को control करने के लिए किया जाता है।

public => Default होता है। Property या method हर जगह accessible होती है (class के अंदर, बाहर, और inherited classes में)।
*/
class Car {
  public brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  public showBrand(): void {
    console.log(`Car brand is ${this.brand}`);
  }
}

const car1 = new Car("Tesla");
console.log(car1.brand); // ✅ Accessible
car1.showBrand(); // ✅ Accessible

/*
                                                //Private


private => Property या method सिर्फ उसी class के अंदर accessible होती है। Class के बाहर या inherited class में access नहीं कर सकते।
 
*/
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  private calculateInterest(): number {
    return this.balance * 0.05;
  }

  public getBalance(): number {
    return this.balance + this.calculateInterest();
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // ✅ Accessible
// console.log(account.balance);   ❌ Error (private)

//Readonly

/* Readonly => TypeScript में readonly keyword का इस्तेमाल properties को immutable (unchangeable) बनाने के लिए किया जाता है। यानी एक बार value assign हो जाने के बाद उसे बदला नहीं जा सकता। */

class User {
  readonly id: number; // सिर्फ पढ़ सकते हैं, बदल नहीं सकते
  name: string;

  constructor(id: number, name: string) {
    this.id = id; // ✅ constructor में assign कर सकते हैं
    this.name = name;
  }
}

const user1 = new User(101, "Suraj");
console.log(user1.id); // ✅ Output: 101
user1.name = "Rahul"; // ✅ Allowed
// user1.id = 102;       ❌ Error: Cannot assign to 'id' because it is a read-only property

//Inheritance

/* TypeScript में Inheritance का मतलब है कि एक class दूसरी class की properties और 
methods को reuse कर सकती है। इससे code दुबारा लिखने की ज़रूरत नहीं पड़ती और reusability बढ़ती है। */

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(): void {
    console.log(`${this.name} is moving...`);
  }
}

// Inheritance (Dog extends Animal)
class Dog extends Animal {
  bark(): void {
    console.log("Woof! Woof!");
  }
}

const dog1 = new Dog("Tommy");
dog1.move(); // ✅ Inherited method
dog1.bark(); // ✅ Own method

//Super Keyword

/*TypeScript में super एक कीवर्ड है जिसका उपयोग child class के अंदर parent class के constructor या methods को कॉल करने के लिए किया जाता है। */

class Person {
  constructor(public name: string) {}
}

class Employee extends Person {
  constructor(
    name: string,
    public jobTitle: string,
  ) {
    super(name); // ✅ calls Person’s constructor
  }
}
const emp = new Employee("Suraj", "Developer");
console.log(emp.name); // Suraj

//Setter and Getter

/*
In TypeScript, getter and setter methods are special functions that allow you to control how properties of a class are accessed and updated.
 They provide encapsulation and let you add logic when reading or writing values. 
*/

class Rectangle {
  constructor(
    private width: number,
    private height: number,
  ) {}
  get area(): number {
    return this.width * this.height;
  }

  set setWidth(w: number) {
    if (w <= 0) throw new Error("width must be positive");
    this.width = w;
  }
}
const rect = new Rectangle(10, 5);
console.log(rect.area);
rect.setWidth = 5;
console.log(rect.area);

//Static Keyword
/*TypeScript में static keyword का उपयोग class के अंदर ऐसे members (properties या methods) बनाने के लिए किया जाता है जो class से जुड़े होते हैं, object से नहीं। यानी 
इन्हें access करने के लिए object बनाने की ज़रूरत नहीं होती, बल्कि सीधे class के नाम से access किया जाता है। */
// ex=> 1
class Counter {
  static count: number = 0;

  constructor() {
    Counter.count++; // हर बार object बनने पर count बढ़ेगा
  }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(Counter.count); // Output: 2

// ex=> 2
class MathUtil {
  static add(a: number, b: number): number {
    return a + b;
  }
}

console.log(MathUtil.add(5, 10)); // Output: 15

// Abstract Class
/*एक abstract class ऐसी class होती है जिसे सीधे object बनाकर इस्तेमाल नहीं किया जा सकता। यह केवल एक ढांचा (blueprint) देती है 
ताकि उसकी child classes उस ढांचे को follow करें।
 इसमें abstract methods/properties होते हैं जिन्हें child classes को ज़रूरी तौर पर implement करना पड़ता है। 
 साथ ही इसमें normal methods भी हो सकते हैं जिन्हें सभी child classes reuse कर सकती हैं।
*/

//Ex=> 1
abstract class Shape {
  abstract area(): number; // हर shape को अपना area बताना ज़रूरी है
  abstract perimeter(): number; // हर shape को अपना perimeter बताना ज़रूरी है
}

class Circle extends Shape {
  radius: number;
  constructor(r: number) {
    super();
    this.radius = r;
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

let c = new Circle(5);
console.log(c.area()); // 78.5
console.log(c.perimeter()); // 31.4

// ex=> 2
abstract class Birthday {
  abstract cutCake(): void;
  abstract singSong(): void;

  party(): void {
    console.log("Birthday party started!");
  }
}

class KidsBirthday extends Birthday {
  cutCake(): void {
    console.log("Cutting cartoon cake 🎂");
  }
  singSong(): void {
    console.log("Singing Happy Birthday loudly 🎵");
  }
}

class AdultBirthday extends Birthday {
  cutCake(): void {
    console.log("Cutting chocolate cake 🍫");
  }
  singSong(): void {
    console.log("Singing Happy Birthday softly 🎶");
  }
}

let kid = new KidsBirthday();
kid.party(); // Birthday party started!
kid.cutCake(); // Cutting cartoon cake 🎂
kid.singSong(); // Singing Happy Birthday loudly 🎵
