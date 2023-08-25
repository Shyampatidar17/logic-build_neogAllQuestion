
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