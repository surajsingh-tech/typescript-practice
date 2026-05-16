// ========================== INTERFACE ==========================
var student = {
    id: 101,
    name: "Suraj",
    course: "BCA",
    showDetails: function () {
        console.log("ID: ".concat(this.id, ", Name: ").concat(this.name, ", Course: ").concat(this.course));
    },
};
student.showDetails();
var user = {
    id: 1,
    name: "Rahul",
    isAdmin: true,
};
console.log(user);
var product = {
    title: "Laptop",
    price: 50000,
};
var apiStatus = "success";
var marks = [10, 20, 30];
var sum = function (x, y) {
    return x + y;
};
console.log(sum(10, 20));
var birthday = /** @class */ (function () {
    function birthday(n) {
        this.name = n;
    }
    birthday.prototype.greet = function (msg) {
        console.log("".concat(this.name, " ").concat(msg));
    };
    return birthday;
}());
var bdy = new birthday("Suraj");
bdy.greet("are invited for bdy party");
