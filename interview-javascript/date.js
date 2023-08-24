// 1. Find minimum date between two dates 

// let d1 = '01/20/2021'
// let d2 = "01/18/2021"

// if(Date.parse(d1)>Date.parse(d2)){
//     console.log("month/date/year ", d2)
// }else{
//     console.log("month/date/year ", d1) 
// }

// // console.log(Date.parse(d1))
// // console.log(Date.parse(d2))



// 2. ------- Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  

// for(var i=2014;i<=2050;i++){
//     // console.log(i)
//     var d = new Date(i,0,1)
//     if(d.getDay()===0){
//         console.log(`1st january is being a Sunday ${i}`)
//     }
// }


//3.  Write a JavaScript program to calculate the days left before Christmas

// let today = new Date()
// let csms = new Date(today.getFullYear(),11,25)
// // console.log(today)
// // console.log(csms)

// if(today.getMonth()==11 &&  today.getDate()>25){
//     csms.setFullYear(csms.getFullYear()+1)
// }

// let one_day = 1000*60*60*24
// let remainigDays = (Math.ceil((csms.getTime()-today.getTime())/one_day))
// console.log("Remainig Days in christmas ", remainigDays)


