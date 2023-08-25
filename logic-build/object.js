console.log("shyam")

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



