/* any Type
Definition -> any ऐसा type है जो TypeScript को कहता है – “मुझे मत रोक, मैं कुछ भी कर सकता हूँ।” इसमें type-checking नहीं होती।
 मतलब compiler को कोई फर्क नहीं पड़ता, सब कुछ allow है। लेकिन यह unsafe है क्योंकि गलती पकड़ में नहीं आती।
*/
let value: any;
value = 42;         // number
value = "Suraj";   // string
value = true;      // boolean

// any example
let valueAny: any = "Hello";
let str: string = valueAny; // ✅ Allowed 
/*
unknown Type Definition => unknown भी हर तरह का value रख सकता है, लेकिन इसे use करने से पहले type-check करना ज़रूरी है। यह any से ज़्यादा सुरक्षित है।
*/

// unknown example
let valueUnknown: unknown = "Hello";
// let str2: string = valueUnknown; // ❌ Error
if (typeof valueUnknown === "string") {
  console.log(valueUnknown.toUpperCase()); // ✅ Safe
}
