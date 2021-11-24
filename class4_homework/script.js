console.log("-------------------------------------------");
console.log("practice 1 || Multi 3 variables");
let p1Var1 = 10;
let p1Var2 = 20;
let p1Var3 = 30;
console.log(p1Var1, p1Var2, p1Var3);
console.log("Multi: " + p1Var1 * p1Var2 * p1Var3);


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


console.log("-------------------------------------------");
console.log("practice 3 || Replace space with asterisk");
let p3Var1 = "Barel Shraga";
console.log(p3Var1);
// console.log(p3Var1.replace(' ', '*'));
let space = p3Var1.indexOf(' ');
let replaced = p3Var1.slice(0, space) + '*' + p3Var1.slice(space+1);
console.log(replaced);


console.log("-------------------------------------------");
console.log("practice 4 || Exponent");
let p4Var1 = 5;
let p4Var2 = 2;
console.log(p4Var1, p4Var2);
console.log(p4Var1**p4Var2);


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


console.log("-------------------------------------------");
console.log("practice 7 || String plus string with space between");
let p7Var1 = 'String';
let p7Var2 = 'Stringush';
console.log(p7Var1);
console.log(p7Var2);
let p7Var3 = p7Var1 + ' ' + p7Var2;
console.log(p7Var3);
console.log(p7Var3.length);


console.log("-------------------------------------------");
console.log("practice 8 || Length of first+last name");
let p8Var1 = 'Barel Shraga';
console.log(p8Var1);
console.log(p8Var1.slice(0, p8Var1.indexOf(' ')).length);
console.log(p8Var1.slice(p8Var1.indexOf(' ')+1).length);


console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log("practice 9 || ?!?!");


console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log("practice 10 || ?!?!");


console.log("-------------------------------------------");
console.log("practice 11 || Swap two numbers without variable");
let first = 1;
let second = 5;
console.log(first);
console.log(second);
first = first + second;
second = first - second;
first = first - second;
console.log(first);
console.log(second);




console.log("-------------------------------------------");
console.log("------------- More practice 1 -------------");
console.log("-------------------------------------------");
console.log("practice extra 1 || Find index of chars b, e in abcdegh");
let str = 'abcdefgh';
console.log('Index of "b": ' + str.indexOf('b'));
console.log('Index of "e": ' + str.indexOf('e'));


console.log("-------------------------------------------");
console.log("practice extra 2 || Slice string to new string");
str = 'I really like fruits and vegetables';
let str2 = str.slice(14, 19);
console.log(str2);


console.log("-------------------------------------------");
console.log("practice extra 3 || Work with 3 strins");
let firstName = "Barel";
let lastName = "Shraga";
let age = "24";
console.log("My name is", firstName, lastName, "my age is", age);


console.log("-------------------------------------------");
console.log("practice extra 4 || Alert 2 string");
let firstStr = "This is the first string";
let secondStr = "This is the second string";
alert(firstStr);
alert(secondStr);

console.log("-------------------------------------------");
console.log("practice extra 5 || Lower case to upper case");
let lowerCaseStr = "case";
console.log(lowerCaseStr);
console.log(lowerCaseStr.toUpperCase());


console.log("-------------------------------------------");
console.log("practice extra 6 || Revert string at half from prompt");
let input = prompt("Enter a string to revert: ", "defabc");
let firstSlice = input.slice(0, input.length/2);
let secondSlice = input.slice(input.length/2);
console.log("Reversed:", secondSlice+firstSlice);