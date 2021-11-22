// practice 1 || Multi 3 variables
console.log("-------------------------------------------");
console.log("practice 1 || Multi 3 variables");
let p1Var1 = 10;
let p1Var2 = 20;
let p1Var3 = 30;
console.log(p1Var1, p1Var2, p1Var3);
console.log("Multi: " + p1Var1 * p1Var2 * p1Var3);


// practice 2 || Swaping between two variables
console.log("-------------------------------------------");
console.log("practice 2 || Swaping between two variables");
let p2Var1 = "first var";
let p2Var2 = "second var";
console.log(p2Var1);
console.log(p2Var2);
let p2Var3 = p2Var1;
p2Var1 = p2Var2;
p2Var2 = p2Var3;
console.log("p2Var1: " + p2Var1);
console.log("p2Var2: " + p2Var2);


// practice 3 || Replace space with asterisk
console.log("-------------------------------------------");
console.log("practice 3 || Replace space with asterisk");
let p3Var1 = "Barel Shraga";
console.log(p3Var1);
// console.log(p3Var1.replace(' ', '*'));
let space = p3Var1.indexOf(' ');
let replaced = p3Var1.slice(0, space) + '*' + p3Var1.slice(space+1);
console.log(replaced);


// practice 4 || Exponent
console.log("-------------------------------------------");
console.log("practice 4 || Exponent");
let p4Var1 = 5;
let p4Var2 = 2;
console.log(p4Var1, p4Var2);
console.log(p4Var1**p4Var2);


// practice 5 || Insert before middle after
console.log("-------------------------------------------");
console.log("practice 5 || Insert before middle after");
let p5Var1 = '_';
let p5Var2 = 'PSHHYAALA';
console.log(p5Var1);
console.log(p5Var2);
let p5Var3 = p5Var2.length/2;
p5Var2 = p5Var2.slice(0, p5Var3) + p5Var1 + p5Var2.slice(p5Var3);
p5Var2 = p5Var1 + p5Var2 + p5Var1;
console.log(p5Var2);


// practice 6 || Sum of first digit
console.log("-------------------------------------------");
console.log("practice 6 || Sum of first digit");
let p6Var1 = 12;
let p6Var2 = 34;
let p6Var3 = 56;
let p6Var4 = 78;
let p6Var5 = 90;
console.log( p6Var1, p6Var2, p6Var3, p6Var4, p6Var5);
console.log("a. Sum: " + (p6Var1+p6Var2+p6Var3+p6Var4+p6Var5));
console.log("b. First digit sum: " + (p6Var1%10+p6Var2%10+p6Var3%10+p6Var4%10+p6Var5%10));


// practice 7 || Length of string plus string with space between
console.log("-------------------------------------------");
console.log("practice 7 || String plus string with space between");
let p7Var1 = 'String';
let p7Var2 = 'Stringush';
console.log(p7Var1);
console.log(p7Var2);
let p7Var3 = p7Var1 + ' ' + p7Var2;
console.log(p7Var3);
console.log(p7Var3.length);


// practice 8 || Length of first+last name
console.log("-------------------------------------------");
console.log("practice 8 || Length of first+last name");
let p8Var1 = 'Barel Shraga';
console.log(p8Var1);
console.log(p8Var1.slice(0, p8Var1.indexOf(' ')).length);
console.log(p8Var1.slice(p8Var1.indexOf(' ')+1).length);


// practice 9 || ?!?!
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log("practice 9 || ?!?!");


// practice 10 || ?!?!
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log("practice 10 || ?!?!");


// practice 11 || Swap two numbers without variable
console.log("-------------------------------------------");
console.log("practice 11 || Swap two numbers without variable");
let first = 1;
let second = 5;
console.log(first);
console.log(second);
first = first + second; // 6
second = first - second; // 1
first = first - second; // 5
console.log(first);
console.log(second);