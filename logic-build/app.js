console.log("shyam")

// --------------->Operators, Branching, Loops<---------

// Q1. Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

// oneWay

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


// ----------------->Functions<----------------

// Q1. Given a and b, your function should return the value of ab
// Example: Input: power(2,3) ––> Output: 8 


// function power(a,b){
//     return a**b
// }
// console.log(power(2,3))

//Q2. Given length of a regular hexagon, your function should return area of the hexagon.
// Example: Input: areaOfHexagon(10) ––> Output: 259.80

// function length(l){
//     let a = ((3*(Math.sqrt(3)*l*l))/2)
//     return a
// }
// console.log(length(10))

//Q3. Given a sentence, your functions should return the number of words in the sentence.
// Example:Input: noOfWords(We are neoGrammers) ––> Output: 3

// let input = prompt("Please enter a sentence:-");
// const noOfWords =(a)=>{
//     let word = a.split(" ").length;
//     return word;
// }
// console.log(noOfWords(input))


// Q4. Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:Input: findMin(3,5) ––> Output: 3;
// Input: findMin(3,5,9,1) ––> Output: 1;
// (Hint: Lookup rest parameters in JavaScript);

// function findMin(...num){
//     let min = Math.min(...num)
//     return min
// }
// console.log("Minimum number is" ,findMin(3,5,9,1))


// -------Anather way

// function findMin(...num){
//   let min =Infinity;
//   for(let i=0;i<num.length;i++){
// 	console.log(num[i])
// 	if(num[i]<min){
// 		min = num[i]
// 	}
//   }
//   return min
// }
// console.log("Minimum number is" ,findMin(3,5,9,1))

// Q5. Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example: Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)

// const findmaximum = (...num)=>{
//     return Math.max(...num)
// }
// console.log("maximum number ",findmaximum(3,5))
// console.log("maximum number ",findmaximum(3,5,9,1))

// Anather Way 

// function findmaximum(...num){
// 	let max = -Infinity;
// 	for(let i=0;i<num.length;i++){
// 	  console.log(num[i])
// 	  if(num[i]>max){
// 		  max = num[i]
// 	  }
// 	}
// 	return max
//   }
//   console.log("maximum number is" ,findmaximum(3,5,9,1))


// Q6. Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle;


// const triange = (a,b,c)=>{
//     if(a==b && b==c){
//         console.log("it is an equilateral triangle")
//     }else if(a==b || b==c){
//         console.log("it is an isosceles triangle")
//     }else {
//         console.log("it is an scalene triangle")
//     }
// }

// triange(90,11,10)

//Q7. Given an array, your function should return the length of the array.
// Example: Input: arrayLength([1,5,3,7,8]) ––> Output: 5


// const arrayLength =(a)=>{
//     return a.length
// }
// console.log(arrayLength([1,5,3,7,8,7,8]))


//Q8. Given an array and an item, your function should return the index at which the item is present.
// Example: Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

// const item = (a,target)=>{
//     for(let i=0; i<=a.length;i++){
//         if(a[i]===target){
//             console.log(i)
//         }
//     }
// }
// item([1,6,3,5,8,9], 3);


//Q9. Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

// const replace = (arr,b,c)=>{
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]==b){
//            arr[i] = c
//         }
//     }
//     return arr
// }
// console.log(replace([1,5,3,5,6,8],5,10))


//Q10. Given a string and an index, your function should return the character present at that index in the string.
// Example:Input: charAt("neoGcamp", 4) ––> Output: c

// let Charat = (str,index)=>{
//     let arr = str.split("")
//     // console.log(arr[1])
//    return arr[index]
// } 
// console.log(Charat("neoGcamp", 4))

// Q11 Given two dates, your function should return which one comes before the other.
// Example:Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

// const minDate =(d1,d2)=>{
//     let newd1 = d1.split('/');
//     let newd2 = d2.split('/');
//     let date1 = new Date(newd1[2],newd1[1]-1,newd1[0]);
//     let date2 = new Date(newd2[2],newd2[1]-1,newd2[0]);

//     if(Date.parse(date1)<Date.parse(date2)){
//         return d1
//     }else{
//         return d2
//     }
    
//     // console.log(newd1,newd2)
//     // console.log(date1)
//     // console.log(date2)
// }

// console.log(minDate('02/05/2021', '24/01/2021'))
 

// Q12. Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.



// Q13. Given a sentence, return a sentence with first letter of all words as capital.
// Example:Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers


// const toSentenceCase = (str)=>{
//     let data = str.split(" ");
//     for(let i=0;i<data.length;i++){
//         // console.log(data[i])
//        data[i] = data[i][0].toUpperCase() + data[i].substr(1); 
//        }
//    let join = data.join(" ");
//    return join 
// }

// console.log(toSentenceCase('we are neoGrammers'))

// anather way


// const toSentenceCase = (str)=>{
//     let words = str.split(" ");
//     let data= (words.map((elem)=>{
//        return elem[0].toUpperCase() + elem.slice(1)
//     }).join(" "))
//     //  console.log(words)
//     return data;
// }

// console.log(toSentenceCase('we are neoGrammers'))

// Q14. Given an array of numbers, your function should return an array in the ascending order.
// Example:Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]


// const sortArray=(arr)=>{
//     arr.sort((a,b)=>{
//         return a-b
//     })
//     return arr
// }
// console.log(sortArray([100,83,32,9,45,61]))

// Q15. Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

// const reverseCharactersOfWord=(rev)=>{
//     let data = rev.split("").reverse().join("").split(" ").reverse().join(" ")
//     // console.log(data)
//         return(data)
// }

// // reverseCharactersOfWord('we are neoGrammers')
// console.log(reverseCharactersOfWord('we are neoGrammers'))


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


// ----------------->Strings<-----------------

// Q1. Write a program that converts the string into uppercase

// let str = "neogcamp is a good acedamic"
// console.log(str.toUpperCase())

// Q2. Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood


// let str1 = "Good";
// let str2 = "Morning"
// let concat = str2.concat(str1)
// console.log(concat)

// Q3. Program that reads string and count number of characters present in the string

// let str = "my name is shyam"
// let count = str.split("").length
// console.log("Number of characters "+ count)


// Q4. Write a program that converts string like "124" to 124

// let str = "124";
// console.log(typeof(str));
// let num = Number(str)
// console.log(typeof num)

// Q5.Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

//const word = prompt("Enter a string ")
// const splt = word.split("")
// console.log(splt)

// const reg = /[aeiou]/gi
// console.log(reg);
// const vowel = word.match(reg);
// console.log(vowel);

// const noVowal = []
// for(let i =0; i<word.length;i++){
//     // console.log(word[i])
//     // let index = vowel.indexOf(word[i])
//     // console.log(index)
//     if(vowel.indexOf(word[i])===-1){
//        noVowal.push(word[i])
//     }
// }
// console.log(noVowal.join(""))

// anather way

// const word = prompt("Enter a string ")
// let splt = word.split("")
// let regx = /[^aieou]/gi
// let vowel = word.match(regx)
// console.log(vowel.join(""))

//Q6 Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45

// let str = "batman45$";

// let split = str.split("").join("")
// console.log(split)

// let regx = /[a-zA-Z0-9]/gi

// let matcg = str.match(regx).join('')
// console.log(matcg)

// if(split==matcg){
//     console.log("string is alphanumeric")
// }else{
//     console.log("string is not a alphanumeric")
// }

// Q7. A program that reads three strings and prints the longest and smallest one

// const str1 = "shyam patidar";
// const str2 = "pooja patidar";
// const str3 = "shyam pooja patidar";
// const len1 = str1.length;
// const len2 = str2.length;
// const len3 = str3.length;
// if(len1>len2 && len1>len3){
//     console.log(`String one is largest`)
// }else if(len2>len1 && len2>len3){
// console.log(`String two is largest`)
// }else{
//     console.log(`String three is largest`)
// }
// if(len1<=len2 && len1<=len3){
//     console.log(`String one is smallest`)
// }else if(len2<=len1 && len2<=len3){
// console.log(`String two is smallest`)
// }else{
//     console.log(`String three is smallest`)
// }

// Q8.A program that counts number of vowels and consonants in a String?

// let str = "my name is shyam patidar and this is good to talk about everything"

// let regxVowel = /[aeiou]/gi
// let regxConsonant = /[^aeiou" "]/gi
// let matchvowel = str.match(regxVowel);
// let matchConsonant = str.match(regxConsonant);
// console.log("Number of vowel is " +matchvowel.length);
// console.log("Number of consonant is "+matchConsonant.length)


//Q9. Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

// let str = "my name is shyam";
// let split = str.split("")
// if(split.length>7){
//     console.log(true)
// }else{
//     console.log(false)
// }

// 10. Write a program that takes two strings and copies smaller string into bigger string

// let str1 = "my name is shyam";
// let str2 = "my name is pooja patidar";

// if(str1.length>str2.length){
//     console.log(`${str1} ${str2}`)
// }else{
//     console.log(`${str2} ${str1}`)
// }


// let str1 = "shyam";
// let str2 = "pooja";

// let result = ""
// for(let i = 0;i<str1.length||i<str2.length;i++){
//  if(i<str1.length){
//     result += str1.charAt(i)
//     console.log(result)
//  }
//  if(i<str2.length){
//     result += str2.charAt(i)
//     console.log(result)
//  }
// }
// console.log(result)

// Q11 Given a string, determine if it is a palindrome, considering only alphanumeric characters

// let str = "madam";
// let len = str.length;
// var msg = "is a pelindrome"
// for(let i=0;i<len/2;i++){
//     // console.log([i])
//     // console.log(str[i])
//     // console.log(str[len-1-i])
//     if(str[i]!=str[len-1-i]){
//     msg = 'is not a pelindrome';
//     }  
// }
// console.log(`${str} ${msg}`)

// anather way

// let str = 'madam'
// let splt = str.split("").reverse().join("");
// if(str==splt){
//     console.log(`${str} is a pelindrome`)
// }else{
//     console.log(`${str} is a not pelindrome`)
// }

// Q12. For a given input string(str), write a function to print all the possible substrings.Without using substr method.

// function subStrings(str){
//     for(let i=0;i<str.length;i++){
//         var substr = ""
//         for(let j=i;j<str.length;j++){
//             substr += str.charAt(j)
//             console.log(substr ) 
//         }
//     }
// }

// subStrings("abcd")

// Q13. Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.

// const fullDate = new Date()
// // console.log(fullDate);
// let date = fullDate.getDate()
// // console.log(date);
// let month = fullDate.getMonth();
// month++;
// // console.log(month)
// let year =  fullDate.getFullYear()
// // console.log(year)
// console.log(`new Date ${date}/${month}/${year}`)

// Q14 Write a program that masks all but last four characters of the string "5565534276455423" to '#'

// let str = "5565534276455423";
// let slic = str.slice(-4)
// let replace = str.replace(slic,'#')
// console.log(replace)

// Q15. Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case

// let str = "tic tac toe is a fun game";
// let slic = str.slice(0,8).toUpperCase() + str.slice(8,str.length)

// console.log(slic)

// Q16. Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string

// let str = "shyam patidar is a good boy";
// let c1 = 'a';
// let c2 = 'b';

// let splt = str.split("")
// for(let i=0;i<=splt.length;i++){
//     if(splt[i]==c1){
//        splt[i]=c2;
//     }
// }
// console.log(splt.join(''));

// Q17 Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word

// let str = "shyam patidar is a good boy";
// let regx = /[^" "]/gi;
// let match =  str.match(regx)
// console.log(match.join(""))

// Q18. Reverse the given string word wise. That is, the last word in given string should come at 1st place, last second word at 2nd place and so on. Individual words should remain as it is. example: Input : Welcome to NeoG Camp → Camp NeoG to Welcome

// let str = "Welcome to NeoG Camp"
// let split = str.split(" ").reverse().join(" ")
// console.log(split);

// Q19. A program that counts the value of each character and prints the most repeated character?

// let str = "shyam patidar"
// let splt = str.split("");

// for(let i=0;i<=splt.length;i++){
//     var count = 1;
//     // console.log(str[i])
//     for(let j=i+1;j<=splt.length;j++){
//      if(splt[i]==splt[j]){
//         count++;
//         splt[j]=0;
//      }
//     }
//     if(splt[i]!=0 && count>1){
//         console.log(`value is ${(splt[i])} count is ${count}`)
//     }   
// }

// for(let i =0;i<=splt.length;i++){
//     var count = 1;
//     for(let j=i+1;j<=splt.length;j++){
//         if(splt[i]==splt[j]){
//             count++;
//             splt[j]=0
//         }
//     }
//     if(count>1 && splt[i]!=0){
//         console.log(`value is ${(splt[i])} count is ${count}`)
//     }
// }


// Q20. Write a program to toggle case of each character of the string "good afternoon" (example: "neogcamp" ⇒ "nEoGcAmP" )

// let str = "good afternoon";
// let str = "neogcamp";
// let splt = str.split("")

// for(let i=1;i<=splt.length;i+=2){
//     // console.log(splt[i].toUpperCase())
//     splt[i] = splt[i].toUpperCase()
// }
// console.log(splt.join(""))


// Q21.Given a string "how was your day?" and a word "how", write a program that removes the occurrence of the specified word from given sentence. ( input: string⇒"programming camp are amazing",word⇒ "programming"; output:" camp are amazing")

// let str = "programming camp are amazing";
// let replc = str.replace("programming","")
// console.log(replc)



// ---------------->Array<------------------

// 1.Find sum of an array and display the output . Example [10,4,5,2,5,6,9].

// let arr = [10,4,5,2,5,6,9];
// var sum =0
// for(let i=0;i<arr.length;i++){
//     sum += arr[i]
// }
// console.log(sum)


//Q2. Find average of an array and display the output.

// let arr = [10,4,5,3,5,6,9]
// var sum =0;
// for(let i=0;i<arr.length;i++){
//     sum +=arr[i]
// }
// console.log(sum/arr.length)

//Q3. Find maximum and minimum of an array.

// let arr = [10,4,5,2,5,6,9]
// let mxm = Math.max(...arr)
// console.log("maximum of an array "+mxm)
// let mnm = Math.min(...arr)
// console.log("minimum of an array "+mnm)

//Q4. Find Median and Mode of an array.
// Median : (N+1/2)th term.
// Mode : Most repeating term

// median
// let arr = [10,4,5,2,5,6,9,1]
// // let arr = [1, 3, 4, 2, 7, 5, 8, 6]

// let sortedArray = arr.sort((a,b)=>{
// return a-b})
// console.log(sortedArray)

// const n = sortedArray.length
// const mid = n/2
// // console.log(mid)
// const minAbs = Math.floor(mid)
// // console.log(minAbs)

// if(n%2===0){
//     console.log("median is "+(sortedArray[minAbs]+sortedArray[minAbs-1])/2)
// }else{
//     console.log("median is "+sortedArray[minAbs])
// }


// Mode

// let arr = [10,4,5,2,5,6,9,9,5,1]

// for(let i=0;i<arr.length;i++){
//     let count = 1;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             count++
//             arr[j]=0
//         }
//     }
//     if(count>1 && arr[i]!=0){
//         console.log(`mode of ${arr[i]} is ${count}`)
//     }
// }

// Q5. Find sum of two arrays.
// [3,5,2,9,4] = 3+5+2+9+4 = 23
// [6,2,8,1,3] = 6+2+8+1+3 = 20
// Final Output : 20+23 = 43

// let arr1 = [3,5,2,9,4];
// let arr2 = [6,2,8,1,3];

// let sumArr1 = arr1.reduce((a,b)=>{
// return a+b
// })
// let sumArr2 = arr2.reduce((a,b)=>{
//     return a+b
// })
// console.log(`sum or two array ${sumArr1+sumArr2}`)

// Q6. Find number of constants and vowels in a string

// let str = "shyam pdatidar"

// let vowelCount = 0;
// let consonantCount = 0;
//  let vowel = ["a","e","i","o","u"]

//  for(let char of str.toLowerCase()){
//     console.log(char)
//     if(vowel.includes(char)){
//         vowelCount +=1;
//     }else{
//         consonantCount +=1
//     }
//  }
//  console.log(`vowel count is ${vowelCount}`)
//  console.log(`consonant count is ${consonantCount}`)


//Q7.Shift an array by X to right
// Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]

// let arr =  [1,2,3,4,5]

// let num  = arr.join("")
// console.log(num)


// let rotate = 4
// let result = (num.slice(rotate,num.length)+num.slice(0,rotate))

// console.log(result.split("").map((Number)))


// console.log(num.slice(rotate,num.length)+)

// let result = +(slice(rotate,num.length)+String(num).slice(0,rotate));
// console.log(result)


// --------->Object<-----------

// Q1. Given an array of objects of student's marks:

// Print the name and total marks of each student.
// Print the name of student whose total marks is highest.
// Print the name of student whose total marks is lowest.
// Print the average marks of the class in computer subject.
// Print the grades of all students:
// Grade A if total marks is higher than or equal to 75%,
// Grade B if higher than or equal to 60%,
// Grade C if higher than or equal to 35%,
// Grade D if lower than 35%.
// Print the total number of students passed and their names. Pass when total marks is greater than 35%.




// const studentDetails = [
// 	{
// 		roll: "1",
// 		name: "Rohan Singh",
// 		maths: 86,
// 		science: 90,
// 		english: 75,
// 		computer: 85
// 	},
// 	{
// 		roll: "2",
// 		name: "Ritvik Patel",
// 		maths: 27,
// 		science: 30,
// 		english: 35,
// 		computer: 30
// 	},
// 	{
// 		roll: "3",
// 		name: "Neha Maurya",
// 		maths: 75,
// 		science: 69,
// 		english: 40,
// 		computer: 75
// 	},
// 	{
// 		roll: "4",
// 		name: "Mohit Verma",
// 		maths: 21,
// 		science: 31,
// 		english: 45,
// 		computer: 40
// 	},
// 	{
// 		roll: "5",
// 		name: "Karan Trivedi",
// 		maths: 70,
// 		science: 80,
// 		english: 35,
// 		computer: 60
// 	}
// ];

//1. Print the name and total marks of each student.

// for(let studentName of studentDetails){
// //    console.log(studentName)
//    let name = studentName.name
//    let sumOfMarks = studentName.maths+studentName.science+studentName.english+studentName.computer
//    console.log(name, sumOfMarks)
   
// }



//2. Print the name of student whose total marks is highest.

// let max = 0;
// let maxStudent = ""
// for(let studentName of studentDetails){
//    let sumOfMarks = studentName.maths+studentName.science+studentName.english+studentName.computer
//    if(sumOfMarks>max){
//     max = sumOfMarks
//     maxStudent = studentName.name
//    } 
// }
// console.log(`max marks ${max} name of student ${maxStudent}`)

// anather way

// let max =0;
// let nameOfStudent = ""

// let data = studentDetails.map((student)=>{
//     const totalMarks  = student.maths+student.computer+student.english+student.science;
//     if(totalMarks>max){
//         max = totalMarks;
//         nameOfStudent = student.name
//     }
// })
// // console.log(data)
// console.log(`max marks ${max} name of student ${nameOfStudent}`)

// 3. // Print the name of student whose total marks is lowest.

// let lowest = studentDetails[0].maths+studentDetails[0].computer+studentDetails[0].english+studentDetails[0].science;
// // console.log(lowest)
// // let lowest = 1000;

// let nameOfStudent = ""

// studentDetails.map((student)=>{
//     const totalMarks =student.maths+student.computer+student.english+student.science;
//     if(totalMarks<lowest){
//         lowest = totalMarks;
//         nameOfStudent = student.name
//     }
// })

// console.log(`lowest marks ${lowest} name of student ${nameOfStudent}`)


// 4. Print the average marks of the class in computer subject.


// const result = studentDetails.reduce((a,b)=>{
//    return a+b.computer
// },0)
// const avg = result/studentDetails.length
// console.log(`average marks of the class in computer ${avg}`)

// Q5. Print the grades of all students:
// Grade A if total marks is higher than or equal to 75%,
// Grade B if higher than or equal to 60%,
// Grade C if higher than or equal to 35%,
// Grade D if lower than 35%.

// const marks = ()=>{
//     studentDetails.forEach((student)=>{
//         const totalMarks = student.maths+student.computer+student.english+student.science;
//         if(totalMarks/4>=75){
//             console.log(`${student.name} has Grade A`)
//         } else if(totalMarks/4>=60){
//             console.log(`${student.name} has Grade B`)
//         }else if(totalMarks/4>=35){
//             console.log(`${student.name} has Grade C`)
//         }else if(totalMarks/4<35){
//             console.log(`${student.name} has Grade D`)
//         }
//     })
// }  

// marks()

// Q6.Print the total number of students passed and their names. Pass when total marks is greater than 35%.


// let pass = ()=>{
//     let count = 0
//    studentDetails.forEach((student)=>{
//        const totalMarks = student.computer+student.maths+student.english+student.science ;
//        if(totalMarks/4>35){
//         count +=1
//         let data = student.name
//         // console.log(`No of students passed ${count} name of student ${data}`)
//        }
//    })
//    return count
// }
// console.log(`No of students passed is  ${pass()}` )




// Given an array of objects of items in cart, print:

// the total No. of items
// the total cart value
// the total discounted value(sum of dicounted values on each item) based on the given discount
// total tax amount (18% tax, calculated on total cart value)


// const cartItems = [
// 	{
// 		id: "101",
// 		name: "Oreo",
// 		count: 2,
// 		price: 30.0,
// 		discount: 0.18
// 	},
// 	{
// 		id: "102",
// 		name: "Red Bull",
// 		count: 1,
// 		price: 99.0,
// 		discount: 0.15
// 	},
// 	{
// 		id: "103",
// 		name: "Dairy Milk Silk",
// 		count: 3,
// 		price: 175.0,
// 		discount: 0.05
// 	},
// 	{
// 		id: "104",
// 		name: "Pulse Candy Pack",
// 		count: 1,
// 		price: 135.0,
// 		discount: 0.2
// 	}
// ];

//Q1. the total No. of items

// let count =0
// let items = cartItems.forEach((item)=>{
//     if(item){
//      count += 1
//     }
// })
// console.log(`total number of items ${count}`)

//Q2. the total cart value

// let p = 0;
// cartItems.map((cartValue)=>{
//     p +=cartValue.price
// })
// console.log("total cart value "+p)


//Q3. the total discounted value(sum of dicounted values on each item) based on the given discount
// let discountTotal = 0;

// cartItems.map(({price,discount})=>{
//     // console.log(price*discount)
//   discountTotal += price*discount
// })
// console.log("sum of dicounted values on each item " +discountTotal)


//Q4. total tax amount (18% tax, calculated on total cart value)

// let totalCartValue = 0;
// cartItems.map(({price})=>{  
//     totalCartValue +=price*0.18
// })
// console.log("total tax amount " +totalCartValue)




// 1) Make a page with one input field and one div tag
// 2) Whenever something is added to input field, it should print the same in the div tag but skip every 3rd char
// 3) So, if user types “abcdefg”, then div tag should show “abdeg”

// let str = "abcdefg"

// let splt = str.split('')
// // console.log(splt);

// for(let i=2;i<splt.length;i +=3){
// 	console.log(splt[i]="")
// }
// console.log(splt.join(""))

// let input = document.getElementById("input");
// let submit = document.getElementById("submit");
// let ouput = document.getElementById("output");

// console.log(input,ouput,submit)

// const submitHandle =()=>{
// 	let data = input.value
// 	let splt = data.split('')
//    for(let i=2;i<splt.length;i +=3){
// 	splt[i]=""
// }
// let result = splt.join("")
// ouput.textContent = result
	
// }

// submit.addEventListener("click",submitHandle)

