function setMode(mode) {
    if (mode === "on") {
        console.log("System Started");
    }
    else {
        console.log("System Stopped");
    }
}
setMode("on"); // ✅ Allowed
setMode("off"); // ✅ Allowed
function printUserId(id) {
    if (typeof id === "number") {
        console.log("User ID (number):", id);
    }
    else {
        console.log("User ID (string):", id);
    }
}
// ✅ Allowed
printUserId(101); // number
printUserId("ABC123"); // string
// Function using custom type
function printUser(user) {
    console.log("ID: ".concat(user.id, ", Name: ").concat(user.name, ", Active: ").concat(user.isActive));
}
// ✅ Allowed
printUser({ id: 101, name: "Suraj" });
printUser({ id: "USR2026", name: "Rahul", isActive: false });
// ❌ Not Allowed
// printUser({ id: true, name: "Test", isActive: true }); 
// Error: Type 'boolean' is not assignable to type 'string | number'
