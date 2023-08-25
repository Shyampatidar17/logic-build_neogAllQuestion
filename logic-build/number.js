

// -------------------->Number<-------------------

//Q1. Write a program to input 2 numbers and display the sum of the numbers to the console.
// Input Number 1: 20, Input Number 2: 40, Sum : 60

// let num1 = +(prompt("Input Number 1:"));
// let num2 = +(prompt("Input Number 2:"));
// let sum  = num1+num2;
// console.log("Sum " +sum)

//Q2. Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest
// Input: P=100, R=6%, T=2
// Output: 12

// const p = 100;
// const r = 6;
// const t=2;

// const si = (p*r*t)/100
// console.log("simple interest = " +si)

//Q3. Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

// Formula : 0.5 * m * v * v

// const m = +prompt("enter mass:-");
// const v = +prompt("enter volume:-");
// const ki = 0.5*m*v*v;

// console.log("kinetic energy= " +ki);

// Q4.Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively.
// Input: 56
// Output: 13.33333


// const f = +prompt("Enter temp in to fahrenheit:- ");
// const c = (f-32)*5/9
// console.log("Celsius temprature= " +c)

//Q5. Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

// Formula :
// Area: a*a;
// Perimeter: 4*a;
// Surface Area: 6*a*a;
// Volume: a*a*a;

// const a = +prompt("Enter a value:- ");
// const area = a*a;
// const perimeter = 4*a;
// const surfaceArea = 6*a*a;
// const volume = a*a*a;

// console.log("Area of square " +area);
// console.log("Perimeter of square " +perimeter);
// console.log("Surface Area of Cube " +surfaceArea);
// console.log("Volume of Cube " +volume);


//Q6. Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

// Input: CP = 1500, SP = 2000
// Output: 500 Profit

// Input: CP = 3125, SP = 1125
// Output: 2000 Loss

// const cp = +prompt("Enter a Cost price")
// const sp = +prompt("Enter a Selling price")

// const calc = (cp-sp)

// if(cp<sp){
//     console.log((-calc) +" profit")
// }else{
//     console.log(calc +" loss")
// }

//Q7. Write a program to calculate sum of N natural digits, as input by the users?

// Enter a positive integer: 100
// Sum = 5050

// let num = +prompt("Enter a positive integer: ");
// let sum = 0
// if(num>0){
//     for(let i=0;i<=num;i++){
//        sum = sum+i
//     }
// }
// console.log(`Sum of ${num} natural digits is  ${sum}` )


// Q8. Write a Program to Print N Odd Number in Descending Order.
// Input : 4
// Output : 7
// 5
// 3
// 1

// let num = +prompt("Enter a number:");

// let num = 7;

// for(let i =num; i>=1;i--){
// if(i%2!==0){
//     console.log(i)
// }
// }


// Q9. Write a JavaScript program to compute the sum of all digits that occur in a given string.

// Input: 1234
// Output: 1+2+3+4 = 10

// let input = "12345";
// let splt = input.split('')
// // console.log(splt)
// let num1 = splt.map((elem)=>{
//     return Number(elem)
// })
// let sum = num1.reduce((a,b)=>{
//     return a+b
// })


//Q10 Write a JavaScript program that reverses a number.

// Example:

// Input:  32243;
// Output:  34223

// let num = 32243;
// let str = String(num).split("").reverse().join("")
// console.log(str)

// 11. Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.
// Example-Enter a Number : 1234
// Enter the Number of Rotations : 2
// Output : 3412 

// let num = 12345;
// let rotate = 2;
// let result = +(String(num).slice(rotate,num.length)+String(num).slice(0,rotate));
// console.log(result)



// 12. Write a Program to convert Decimal to Binary.

// Enter the number to convert: 5
// Binary of Given Number is=101


// let num = 10;
// let temp = num;
// let binary = ""

// while(temp!==0){
//     if(temp%2===0){
//     binary +=0
//     }else{
//     binary +=1
// }
// temp  = Math.floor(temp/2)
// }
// console.log(binary)

// Follow up Question : Write a Program to Convert Octal to Decimal.

// Enter an octal number: 116
// Octal of Given Number = 78 in decimal
