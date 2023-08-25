
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

