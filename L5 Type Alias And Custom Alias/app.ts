/* 
Type Alias => TypeScript में Type Alias का मतलब है कि आप किसी type (चाहे वो primitive हो, union (|) हो, literal हो, या complex object)
 को एक नाम दे सकते हो। उस नाम को बाद में बार-बार use कर सकते हो, बजाय हर बार पूरा type लिखने के।
*/
// Ex - 1
type Mode = "on" | "off";

function setMode(mode: Mode) {
  if (mode === "on") {
    console.log("System Started");
  } else {
    console.log("System Stopped");
  }
}

setMode("on"); // ✅ Allowed
setMode("off"); // ✅ Allowed
// setMode("pause"); // Argument of type '"pause"' is not assignable to parameter of type 'Mode'.

// Ex - 2
type Id = number | string;

function printUserId(id: Id) {
  if (typeof id === "number") {
    console.log("User ID (number):", id);
  } else {
    console.log("User ID (string):", id);
  }
}

// ✅ Allowed
printUserId(101); // number
printUserId("ABC123"); // string

// ❌ Not Allowed
// printUserId(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'Id'.

//Cumstom Types Alias

type User = {
  id: number | string; // union type
  name: string;
  isActive: boolean;
};

// Function using custom type
function printUser(user: User) {
  console.log(`ID: ${user.id}, Name: ${user.name}, Active: ${user.isActive}`);
}

// ✅ Allowed
printUser({ id: 101, name: "Suraj", isActive: true });
printUser({ id: "USR2026", name: "Rahul", isActive: false });

// ❌ Not Allowed
// printUser({ id: true, name: "Test", isActive: true });
// Error: Type 'boolean' is not assignable to type 'string | number'
