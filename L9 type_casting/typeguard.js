//=======================================type Guard===========================================================
/*Type Guard TypeScript में एक खास चेक या फ़ंक्शन होता है जो compiler को बताता है कि “यह वैरिएबल किस टाइप का है”.
इससे TypeScript को सही टाइप समझ आता है और आप उस टाइप की properties या methods सुरक्षित तरीके से इस्तेमाल कर सकते हो।

🛠️ Type Guard किस समस्या को हल करता है?
1 => Union Types की ambiguity

जब किसी वैरिएबल का टाइप string | number जैसा union होता है, तो compiler को पता नहीं होता कि कौन सा टाइप है।

Type Guard इस confusion को दूर करता है।

2 => Compile-time safety

गलत टाइप पर method call करने से बचाता है।

जैसे number पर .toUpperCase() call करने से error आता, Type Guard इसे रोकता है।

3 => Code clarity

Code पढ़ने वाले को साफ़ दिखता है कि किस condition में कौन सा टाइप इस्तेमाल हो रहा है।

4 => Better IntelliSense

Type narrowing होने के बाद editor सही suggestions देता है।
*/
function add(a, b) {
    //add type guards
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(50, 4));
console.log(add("Sonu", 44));
function move(animal) {
    if ("fly" in animal) {
        // ✅ यहाँ TypeScript समझ गया कि animal Bird है
        animal.fly();
    }
    else {
        // ✅ यहाँ TypeScript समझ गया कि animal Fish है
        animal.swim();
    }
}
var parrot = { fly: function () { return console.log("उड़ रहा हूँ!"); } };
var goldfish = { swim: function () { return console.log("तैर रहा हूँ!"); } };
move(parrot); // Output: उड़ रहा हूँ!
move(goldfish); // Output: तैर रहा हूँ!
//===================type guard in class======================
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a car..");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck..");
    };
    Truck.prototype.loadMaterial = function (amount) {
        console.log("loading material .... ".concat(amount));
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // vehicle.loadMaterial(500); Error so use type guard
    if ("loadMaterial" in vehicle) {
        vehicle.loadMaterial(600);
    }
    //or
    // if(vehicle instanceof Truck)
    // {
    //    vehicle.loadMaterial(600)
    // }
}
useVehicle(v2);
//============================= Type Casting / Type Assertion =============================
/*
TypeScript में Type Assertion का मतलब होता है
compiler को manually किसी value का type बताना।

👉 यह actual type conversion नहीं करता।
👉 सिर्फ compiler को hint देता है।
*/
//================================ Syntax ================================================
// 1. as Syntax ✅ Most Used
var userValue = "Hello";
var userLength = userValue.length;
console.log(userLength);
// 2. Angle Bracket Syntax
var courseData = "TypeScript";
var courseLength = courseData.length;
console.log(courseLength);
/*
दोनों same काम करते हैं।

⚠️ React/JSX में <> syntax avoid करते हैं
इसलिए mostly "as" use होता है।
*/
//================================ Real Type Casting =====================================
/*
Real type casting actual conversion करता है
*/
var convertedNumber = Number("123"); // string → number
console.log(convertedNumber);
console.log(typeof convertedNumber);
//================================ DOM Example ===========================================
var inputElement = document.getElementById("username");
console.log(inputElement.value);
/*
यहाँ हम compiler को बता रहे हैं
कि यह input field है।
*/
//================================ Important Points ======================================
/*
1. Type Assertion सिर्फ compiler को type बताता है

2. Runtime में actual value change नहीं होती

3. "as" keyword सबसे ज्यादा use होता है

4. Mostly unknown type और DOM में use करते हैं

5. गलत assertion runtime error दे सकता है
*/
//================================ Short Definition ======================================
/*
Type Assertion TypeScript में compiler को manually
किसी value का type बताने का तरीका है।
*/
