
//Type Letrals
/*
  Literal Types in TypeScript वो types होते हैं जो किसी variable, parameter या property को सिर्फ़ कुछ exact, predefined values तक सीमित कर देते हैं।
इसका मतलब यह है कि variable को कोई भी random string, number या boolean assign नहीं किया जा सकता, बल्कि सिर्फ़ वही values दी जा सकती हैं जो type में explicitly लिखी गई हैं।

Literal types का इस्तेमाल करके हम:

Type safety बढ़ाते हैं (गलत values compile-time पर ही पकड़ ली जाती हैं)।

Enums जैसा behavior पाते हैं लेकिन बिना अलग enum बनाए।

Discriminated unions और pattern matching जैसे advanced features को implement कर सकते हैं।

Configuration objects और API responses को strictly validate कर सकते हैं

SYNATX => type TypeName = literal1 | literal2 | literal3;
*/
// Step 1: Literal type define करो

type signal = "red" | "green" | "yellow";
const showSignal = (signal: signal) => {
  if (signal === "red") {
    console.log("Stop");
  } else if (signal === "green") {
    console.log("GO");
  } else if (signal === "yellow") {
    console.log("Ready");
  }
};

showSignal("red");
showSignal("green");
// showSignal("blue") Argument of type '"blue"' is not assignable to parameter of type 'signal'.
