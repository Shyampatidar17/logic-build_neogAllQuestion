// --------------->Operators, Branching, Loops<---------

// Q1. Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

// oneWay to solve

// function sum(num1,num2,num3,num4,num5){
//     const plus = num1+num2+num3+num4+num5
//     return plus
// }
// console.log(sum(5,13,7,21,48))

// anather-way

// let num1=5,num2=13,num3=7,num4=21,num5=48;

// const addNumber = (...nums)=>{
//     return(nums.reduce((a,b)=>a+b))
// }
// console.log(addNumber(num1,num2,num3,num4,num5))


// Q2. Write a program to take a number input from user and determine whether the number is odd or even.

// let input = +prompt("enter a number")
// // console.log(typeof input)
// if(input%2===0){
//     console.log("number is even")
// }else{
//     console.log("number is odd")
// }

// Q3. Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

// let num1=129 , num2=251;
// if(num1>num2){
//     console.log("num1 is maximum ",num1)
//     console.log("num2 is mimimum ",num2)
// }else{
//     console.log("num2 is maximum ",num2)
//     console.log("num1 is minumum ",num1)
// }

// or anather-way

// let num1=129 , num2=251;
// const maxm = Math.max(num1,num2)
// const minm = Math.min(num1,num2)
// console.log("maxinum number is ", maxm)
// console.log("minimum number is ", minm)


//Q4. Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.


// let num1 =8, num2 = 23, num3=17

// const maxmm = Math.max(num1,num2,num3);
// console.log("maximum number is ",maxmm)


// or anather-way

// let num1 =8, num2 = 23, num3=17;
// if(num1>num2 && num1>num3){
//     console.log("maximum number is ",num1)
// }else if(num2>num1 && num2>num3){
//     console.log("maximum number is ",num2)
// }else{
//     console.log("maximum number is ",num3)
// }

// Q5.Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

// let num1 =35, num2 = 29, num3=49;

// const minmm = Math.min(num1,num2,num3)
// console.log("minumum number is ",minmm)

// or anather way

// let num1 =35, num2 = 29, num3=49;
// if(num1<num2 && num1<num3){
//     console.log("minumum number is ",num1)  
// }else if(num2<num1 && num2<num3){
//     console.log("minumum number is ",num2)  
// }else{
//     console.log("minumum number is ",num3)  
// }

// Q6.Write program to take a month as an input from the user and find out whether the month has 31 days or not.

// const month = Number(prompt("Input month as an number"))
// console.log(typeof month)
// if(month===1 || month===3 || month ===5 || month ===7 || month===8 || month ===10 || month===12){
//     console.log("this month is 31 days")
// }else{
//     console.log("this month is not 31 days")
// }



// Q7.Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 ..... 



// for(let i=1; i<=100;i++){
//     if(i%3===0 && i%5===0){
//         console.log("FizzBuzz");
//     }else if(i%3===0){
//      console.log("Fizz")
//     }else if(i%5===0){
//    console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }

// anather way

// for(let i=1;i<=100;i++){
//  console.log(((i%3==0 && i%5==0)?"FizzBuzz":"" ) + (i%3==0?"Fizz":"") +(i%5==0?"Buzz":"") || i)
// }


//Q8.  Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

// for(let i=1;i<=5;i++){
//     let string="";
//     for(j=1;j<=i;j++){
//       string = string+"*"
//     }
//     console.log(string)
// }


// for(let i=1;i<=5;i++){
//     let string="";
//     for(j=1;j<=i;j++){
//       string = string+i
//     }
//     console.log(string)
// }


// for(let i=1;i<=5;i++){
//     let string="";
//     for(j=1;j<=i;j++){
//       string = string+"*"
//     }
//     console.log(string)
// }
// for(let i=5;i>=1;i--){
//     let string="";
//     for(j=1;j<=i;j++){
//       string = string+"*"
//     }
//     console.log(string)
// }

// for(let i =0;i<=5;i++){
//     let str = "";
//     for(let j=1; j<=i;j++){
//         str = str+"*"
//     }
//     console.log(str)
// }


// let rows = 6;
// for(let i=0;i<=rows;i++){
//     let str = "";
//     for(let j=0;j<i;j++){
//         str +="*"
//     }
//     console.log(str)
// }


// Q9. Write a program to take a number input from user and print multiplication table 12 times for that number.


// let input = Number(prompt("Enter a number"))
// for(let i=1; i<=12;i++){
// console.log(`${input} * ${i} = ${input*i}`)
// }

// or anather way

// for(let i=1; i<=12;i++){
//     let input = 4
// console.log(`${input} * ${i} = ${input*i}`)
// }

// Q10. Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

// let input = Number(prompt("Enter a number.."))
// let first =0,second = 1,third;
// for(let i=1;i<=input;i++){
//     console.log(first)
//     third = first+second;
//     first = second;
//     second = third
// }




// Q10.Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

// let input = Number(prompt("Enter a number"))
// let num =1
// for(let i=1;i<=input;i++){
//    num =num*i
// }
// console.log(num)


// Q11.Write a Program to take a number input from user and find if the number is Prime or not.

// let input = Number(prompt("Enter a number "));
// let isPrime = true;

// if(input===1){
//     console.log(`${input} is neither prime number`)
    
// }else if(input>1){
//     for(let i=2;i<input;i++){
//     if(input%i==0){
//       isPrime = false
//     }
// }

// if(isPrime==true){
//     console.log(`${input} is a prime number`)
// }else{
//     console.log(`${input} is not a prime number`)
// }
// }else{
//     console.log("number is negative")
// }



// let num = 2;
// let isPrime = true;

// if(num===1){
//     console.log("number is neither prime number nor composite")
// }else if(num>1){
//     for(i=2;i<num;i++){
//         if(num%i===0){
//             isPrime=false
//         }
//     }
//     if(isPrime==true){
//         console.log(`${num} number is prime number`)
//     }else{
//         console.log(`${num} number is not a prime number`)

//     }
// }else{
//     console.log(`${num} nagative number`)
// }



// Q12.Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

// let input = prompt("enter a day")
// let str = input.toLowerCase()
// if(str=="monday" || str=="tuesday" || str=="wednesday" ||  str=="thursday" || str==" friday" ){
//    console.log(`${str} is weekday`) 
// }else if(str=="saturday" || str=="sunday"){
//     console.log(`${str} is weekend`)
// }else{
//     console.log(`${str} pls input valid day`)
// }