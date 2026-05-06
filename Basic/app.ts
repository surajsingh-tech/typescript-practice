function num(a: number, b: number, c: boolean, sometext: string) {
  if (c) {
    console.log(`${sometext} ${a + b}`);
  } else {
    console.log(`${sometext} ${a + b}`);
  }
}

let aa = 5;
let bb = 52;
let cc = true;
let dd = "Sum of Two number is : ";
num(aa, bb, cc, dd);
