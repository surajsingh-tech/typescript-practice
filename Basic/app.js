function num(a, b, c, d) {
    if (c) {
        console.log(a + b + d);
    }
    else {
        console.log(a + b);
    }
}
var aa = 5;
var bb = 52;
var cc = true;
var dd = "this is string";
var ans = num(aa, bb, cc, dd);
console.log(ans);
