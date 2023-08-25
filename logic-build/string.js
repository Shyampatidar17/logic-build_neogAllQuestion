
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


// Q22. 
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

