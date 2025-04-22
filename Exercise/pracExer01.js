//Exercise 1:
//Write an algorithm to display the area of a rectangle. Remember that
//Area = Length x Width.
let lenght = 5;
let width = 10;
let area = lenght * width;
console.log("The area of the rectangle is: " + area + " square units.");

//Exercise 2:
//write a JavaScript program to compute the sum of the two integers. if the two
//values are same, then return triple their sum.
function getRandomInt( max) 
{
    return Math.floor(Math.random() * max);
}

let num1 = getRandomInt(3);
let num2 = getRandomInt(3);
console.log(num1);
console.log(num2);
if(num1 === num2) {
    console.log("The two values are the same. The triple of their sum is: " + (3 * (num1 + num2)));
}

//Exercise 3:
//write a JavaScript programe that genereates two numbers and returns true if one
//of the numbers is 50 or if their sum is 50.
function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

let num3 = getRandomInt(51);
let num4 = getRandomInt(51);
console.log(num3);
console.log(num4);
if (num3 === 50 || num4 === 50 || (num3 + num4) === 50) 
{
 console.log("this is true to 50")
}
else
{
    console.log("so shit")
}

//Exercise 4:
//Create a function that takes voltage and current and returns the
//calculated power.
//[ Formula: Current equals Power divided by Voltage ]
let voltage = 20;
let current = 5;
let power = voltage * current;
console.log("The power is: " + power + " watts.");

//Exercise 5:
