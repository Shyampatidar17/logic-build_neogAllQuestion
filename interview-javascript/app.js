console.log("hello world");

// let arr= [1,2,3,4,5,6,7,8,9,10];

// function oddEven(arr){
//     var even = []
//     var odd = []
// for(let i=0;i<arr.length;i++){ 
//     if(arr[i]%2===0){
//         even.push(arr[i])
//     }else{
//         odd.push(arr[i])
//     } 
// }
// console.log("even ", even)
// console.log("odd ", odd)
// }
// oddEven( [1,2,3,4,5,6,7,8,9,10])



let arr = [121, 123, 34543, 3212, 48984]
// console.log(arr);

var trueFalse = []
for(let i=0;i<arr.length;i++){
let str = arr[i].toString()
let data = str.split("").reverse().join("")
if(str==data){
   trueFalse.push(true)
}else{
    trueFalse.push(false)
}}
// console.log(trueFalse)


// ============================================================

function convertToNumber(str) {
    // code here

    const remove = /[^$,]/gi;
    const match = +str.match(remove).join("");
    return match;
  }

  // expected answer 123123.63
  // console.log("convertToNumber ans:", convertToNumber("$123,123.63"));

  // ======================================================================

  function mergeTwoObjects(obj1, obj2) {
    let obj = { ...obj1, ...obj2 };
    return obj;
  }

  // expected answer {a:1,b:2,c:3,d:4}
  // console.log(
  //   "mergeTwoObjects ans:",
  //   mergeTwoObjects({ a: 1, b: 2 }, { c: 3, d: 4 })
  // );

  // ======================================================================
 
  // function oddAndEven(arr) {
  //   // console.log("arr:", arr);
  //   // code here
  //   var even = []
  // var odd = []
  //   for (let i = 0; i < arr.length; i++) {
  //     // console.log(arr[i]);
  //     if (arr[i] % 2 === 0){
  //     even.push(arr[i])
  //     } else {
  //   odd.push(arr[i])
  //     }
  //   }
  //   console.log("even" , even)
  //   console.log("odd", odd)
  // }
  // // expected arr: [1,2,3,4,5,6,7,8,9,10]
  // // expected answer {even:[2, 4, 6, 8, 10],odd:[1, 3, 5, 7, 9]}

  // console.log(
  //   "oddAndEven ans:",
  //   oddAndEven([...Array(10).keys()].map(() => parseInt(Math.random() * 10)))
  // );


  // ======================================================================

  function pallindromeArray(arr) {
    // console.log("arr:", arr);
    // code here
   
  }

  // expected answer [true,false,true,false,true]
  // console.log(
  //   "pallindromeArray ans:",
  //   pallindromeArray([121, 123, 34543, 3212, 48984])
  // );


  // let num = 2;
  // let isPrime = true
  
  // if(num==1){
  //   console.log("number in neither prime nor composite")
  // }else if(num>1){
  //   for(let i=2;i<num;i++){
  //    if(num%i==0){
  //     isPrime = false
  //     break;
  //    }
  // }
  // if(isPrime){
  //   console.log(num+ " it is an prime number")
  // }else{
  //    console.log(num+" it is not an prime number")
  //  }
  // }else{
  //   console.log("please enter number is greater than zero")
  // }



  

  