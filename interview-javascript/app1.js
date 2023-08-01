
console.log("shyam");

// 1 how to find out duplicate elements in given array

// const arr = [1,2,10,8,0,2,9,8,12,0]
// const duplicate = arr.filter((elem,inde,arr)=>{
//           return arr.indexOf(elem)!== inde
// })
// console.log(duplicate)

// let arr1 =[]
// for(let i=0;i<arr.length;i++){
//     var count = 1
//  for(let j=i+1;j<arr.length;j++){
//     if(arr[i]==arr[j]){
//        count++
//        arr[j]=0
//     }
//  } 
//  if(count>1 && arr[i]!=0){
//     console.log(`${count} or ${arr[i]}`)
//      arr1.push(arr[i])
//  }
// }
// console.log(arr1)

// 2. how to find maximum and minimum in array

// const arr = [1,9,87,65,76]

// const maxFunction = (arr)=>{
//     return arr.reduce((prev,curr)=>{
//               return prev>curr?prev:curr
//     })
// }
// console.log(maxFunction(arr))

// const minFunction = (arr)=>{
//     return arr.reduce((prev,curr)=>{
//               return prev<curr?prev:curr
//     })
// }
// console.log(minFunction(arr))

// 3. How to find second largest value in array and remove first largest value array

// let arr = [2,8,9,7]
// let largestValue = (arr)=>{
//     var firstLargestValue = Math.max(...arr)
//     index = arr.indexOf(firstLargestValue)
//     arr.splice(index,1)
//     let secondLargestValue = Math.max(...arr)
//     return secondLargestValue
// }

// console.log(largestValue(arr));

// 4. How to find missing element in given array

// let arr = [1,2,3,4,6,7,8,10]
// const missArray = []
// const missingValue =(arr)=>{
//     const minValue = Math.min(...arr)
//     const maxValue = Math.max(...arr)
//     for(let i=minValue; i<=maxValue;i++){
//         // console.log(arr.indexOf(i)<0)
//         if(arr.indexOf(i)<0){
//             missArray.push(i)
//             arr.push(i)
//         }
//     }
// }
// missingValue(arr)
// console.log(missArray)
// console.log(arr)

// var x =10 
// function foo(){
//     var y=20
//     function bar(){
//         var z=15;
//         var output = x+y+z;
//         return output
//     }
//     return bar()
// }
// console.log(foo())



// const arr = [1,2,8,2,9,8]

// let arr1 = []
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//            arr[j] = 0
//         }
//     }
//     if(arr[i]!=0){
//         arr1.push(arr[i])
//     }
// }
// console.log(arr1);

// 5. find even or odd numbers is array in javascript

// const numbers = [1,2,3,8,9,12,16];
// const even  = numbers.filter((item)=>{
//    return item%2==0
// })
// const odd = numbers.filter((item)=>{
//     return item%2!=0
// })
// console.log(even)
// console.log(odd)

// 6. find the sum of all element in a given array

const numbers = [1,2,3,8,9,12,16];

// let sum = 0
// for(let i=0;i<numbers.length;i++){
//     sum +=numbers[i]
// }
// console.log(sum)

// const sum = numbers.reduce((curr,acc)=>{
//     return curr+acc
// })
// console.log(sum)


// 7. find the factorial n of a given number in javascript

// let num = 5
// let fact = 1
// for(let i =1;i<=num;i++){
//     fact *=i
// }
// console.log(fact)

// 8. How to find prime number in javascript

// let num = 4;
// let isPrime = true;

// if(num===1){
//     console.log("1 is neither prime nor composite number")
// }else if(num>1){
//   for(let i=2;i<num;i++){
//     if(num%i==0){
//      isPrime =false;
//      break 
//     }
//   }
//   if(isPrime){
//     console.log(`${num} is a prime number`)
//   }else{
//     console.log(`${num} is a not a prime number`)
//   }

// }else{
//     console.log("the number is not a prime number")
// }

// let num = 2;
// if(num==1){
//     console.log("1 is neither prime nor composite number")
// }else if(num<1){
//     console.log('nagative number is not a prime number')
// }else{
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             var result = `${num} is not a prime number`
//             break;
//         }else{
//             var result = `${num} is a prime number`
//         }
//     }
//     console.log(result)
// }

// 11 how to find vowels from strings in javascript;

// let string = "shyam is a good boy"
// let reg = /[aeiou]/gi
// let match = string.match(reg).join('').length
// console.log(match)

// let vowel = ['a','e','i','o','u']

// const vowelCount = (str)=>{
//     var count =0
//     for(let letter of str.toLowerCase()){
//     //   console.log(vowel.includes(letter))
//     if(vowel.includes(letter)){
//         count++
//     }
//     }
//    console.log(count)
// }
// vowelCount(string)


// 12 how to sting in javaString
// let string = "shyam is a good boy";
// let reverse = string.split("").reverse().join("").split(" ").reverse().join(" ")
// console.log(reverse)

// 13 how to find the palindrome 

// let str = "madam"
// let len = str.length
// var msg = 'it is an pelidrome'
// for(let i=0;i<len/2;i++){
//     // console.log(str[i])
//     // console.log(str[len-1-i])
//     if(str[i]!=str[len-1-i]){
//         msg = 'it is not a pelindrom'
//     }
// }
// console.log(msg)

// let reverse = str.split("").reverse().join('')
// console.log(reverse)
// if(str == reverse){
//     console.log('is a pelindrome')
// }else{
//     console.log('is is not a pelindrome')
// }

// 13 how two swap two variable without using third variable in javascript

// using third variable

// var x = 10;
// var y = 12;
// // var c = x;
// // x = y
// // y = c
// [x,y] = [y,x]
// console.log(x,y)

// 14 how to merge two arrays and sort them in javascript

// const arr1 = [1,8,9]
// const arr2 =[45,7,19]
// const finalArr = arr1.concat(arr2)

// finalArr.sort((a,b)=>{
//     return a-b
// })
// console.log(finalArr)

// 15. how to find factors of integer

// const num = 12;
// for(let i=0;i<=num;i++){
//     if(num%i==0){
//         console.log(i)
//     }
// }

// 16 how to make calculator in javascript

// const operator = prompt("please select operator + - / *")
// const num1 = parseFloat(prompt("enter a num 1"))
// const num2 = parseFloat(prompt("enter num 2"))
// if(operator == "+"){
//     result = num1+num2
// }else if(operator == "-"){
//     result = num1-num2
// }else if(operator == '*'){
//     result = num1 * num2
// }else if(operator == '/'){
//     result = num1 / num2
// }
// console.log(`${num1} ${operator} ${num2} = ${result}`)

// 18 how to compare array is equal or not 

// var arr1 = [2,9,6,8,4]
// var arr2 = [4,8,6,9,2]

// const isArrSame = arr1.length == arr2.length &&

// arr1.every((curElem)=>{
//     if(arr2.indexOf(curElem)>-1){
//         return(curElem=[arr2.indexOf(curElem)])
//     }
// })
// console.log(isArrSame)

// var arr1 = [2,9,6,8,4,4,4]
// var arr2 = [4,8,6,9,12]

// let interSection = arr1.filter((ele)=>{
//     return arr2.includes(ele)
// })
// console.log([...new Set (interSection)])

//  find Union of two array

// var arr1 = [1,2,6,8,17];
// var arr2 = [4,8,6,19,12,17];

// var uniounArray = [...arr1,...arr2]
// console.log([...new Set(uniounArray)])

//  Program to convert first letter of a string in to uppercase in javaScript

// let str = "shyam patidar is a good boy"

// let data = str.split(" ").map((elem)=>{
// return (elem[0].toUpperCase()+elem.slice(1))
// })

// console.log(data.join(" "))

//  fibonacci series

// let a = 0 ;
// let b = 1;
// for(let i=0;i<=15;i++){
//     // console.log(i)
//     let temp = a+b; // 0+1=1
//     a = b;
//     b=temp
//     console.log(temp)
// }

// let string =""
// for(let i=1;i<=6;i++){
//     for(let j=1;j<i;j++){
//         string += '*'
//     }
//   string +='\n'
// }
// console.log(string)

// console.log(1)
// setTimeout(()=>{
//     console.log(2)
// },1000)
// setTimeout(()=>{
//     console.log(3)
// },0)
// console.log(4)


// const array = [1,2,3,4,5,6]
// const mapResult = array.map((item)=>item>2)
// const filterResult = array.filter((item)=>item>2)
// console.log(mapResult)
// console.log(filterResult)

// const array=[2,3,444,5,66,2,41,3]
// const duplicate = array.filter((elem,inde,arr)=>{
// return (arr.indexOf(elem)===inde)
// // console.log(arr.indexOf(elem)==inde)
// // console.log(inde)
// })
// console.log(duplicate)


// let arr = []
// for(let i=0;i<array.length;i++){
//     for(let j=i+1;j<array.length;j++){
//         if(array[i]==array[j]){
//           array[j]=0
//         }else{
//             arr.push(array[i])
//         }
//     }
// //    console.log(arr)
// }
// console.log(arr)
// console.log(array)

// let newUniqueArr = [...new Set(array)]
// console.log(newUniqueArr);

// let str = '"\"dotNumber\"'
// let regx = /[^"\"\"]/gi
// const match = str.match(regx).join("");
// console.log(match)


