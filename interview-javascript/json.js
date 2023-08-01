
const students = [
	{
		FirstName : "Rohit",
		LastName : "Lalwani",
		rank : "1",
		class : "1st"
	},
	{
		FirstName : "Moin Ahmed",
		LastName : "Khan",
		rank : "2",
		class : "2nd"
	},
	{
		FirstName : "Vinit",
		LastName : "Joshi",
		rank : "3",
		class : "5th"
	},
	{
		FirstName : "Kuldeep",
		LastName : "Patel",
		rank : "5",
		class : "5th"
	},
	{
		FirstName : "Hemant",
		LastName : "Uchchasare",
		rank : "1",
		class : "5th"
	}
]

students.sort((a,b)=>{
 return (a.rank-b.rank)	
})
const table = document.getElementById("myTable")
function getData(data){
    //    students.map((elem)=>{
    //     var row = `<tr>
    //     <td >${elem.FirstName}</td>
    //     <td >${elem.LastName}</td>
    //     <td >${elem.rank}</td>
    //     <td >${elem.class}</td>
    //     </tr>`
	// 	// var sort = row.sort((a,b)=>{
	// 	// 	return a-b
	// 	// })
    //     table.innerHTML += row

    // })

    for(var i=0;i<data.length;i++){
        var row = `<tr>
        <td >${data[i].FirstName}</td>
        <td >${data[i].LastName}</td>
        <td >${data[i].rank}</td>
        <td >${data[i].class}</td>
        </tr>`
        table.innerHTML += row
    }
    
}
getData(students)


