//Question no 1
var pass= "abc123";
var userpass1 = prompt("Enter your password! \n default pass:","abc123");
if (userpass1 == ""){
 alert("please enter your password")
} else if (userpass1 == pass) {
 var userpass2 = prompt("Enter your password again!");
if (userpass2 ==pass){
 alert("✅ Correct! The password you entered matches the original password")
}
else
{ alert("❌ Wrong! The password you entered does not matches the first password.")
}
}
else{
alert("❌ Wrong password")
}
//Question no 2
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
//  alert("greeting")
//  /Question no 3

//   A
//  var arrStudentname = [];
//  //B
//  var arrStudentName = [];

// c
//  var arrstring = ["apple","orange","mango"];

//  //D
//  var
//  //E
//  var arrBoolean =[true, false];

//  //F
//  var arrmax =["apple","orange"1,2,true,false];

//  //G
//  var arrDegree = ["SSC", "HSC", "BSC", "BS", "B.COM", "MS", "M.Phil.", "PhD"];

// Question no 4
// a.

// var colors = ["red", "green", "blue", "yellow"];
// var userColor = prompt("Enter your color to add the begining of the array");
// colors.unshift(userColor);

// document.write(colors);

// //b.

// var colors = ["red", "green", "blue", "yellow"];
// var userColor = prompt("Enter your color to add the End of the array");
// colors.push(userColor);

// document.write(colors);

// // c.

// var colors = ["red", "green", "blue", "yellow"];
// colors.unshift("pink", "aqua");

// document.write(colors);

// // d.

// var colors = ["red", "green", "blue", "yellow"];
// colors.shift();

// document.write(colors);

// // e.

// var colors = ["red", "green", "blue", "yellow"];
// colors.pop();

// document.write(colors);

// // f.

// var colors = ["red", "green", "blue", "yellow"];

// var colorIndex = +prompt("Enter index number to add the color.")
// var colorName = prompt("Enter color name.")

// colors.splice(colorIndex, 0, colorName)

// document.write(colors);

// // g.

// var colors = ["red", "green", "blue", "yellow"];

// var colorIndex = +prompt("Enter index number to remove the color.\n [red, green, blue, yellow]")
// var delNum = prompt("How many colors you want to remove.\n [red, green, blue, yellow]")

// colors.splice(colorIndex, delNum)

// document.write(colors);
//Question no 5
// var score 1 = prompt("Enter score 1");
// var score 2 = prompt("Enter score 2");
// var score 3 = prompt("Enter score 3");
// var student score = [];

// var scoredpushed   = studentScore.push(score1, score2, score3);
// var scoreSorted = studentScore.sort();

// alert("studentScore");
// Question no 6
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
// document.write("manufacturers:", manufacturers)
//Question no 7
// var userTable = prompt("Enter Table Number.");
// var tableLength = prompt("Enter Table Length.", 10);

// for(var i= 1; i <= tableLength; i++){

//     document.write(userTable + " x " + i + " = " + (userTable*i) + "<br>")

//}
//Question no 8
//a;

// for(var i = 1; i <= 15; i++){
//     document.write(i + ", ")
// }

// // b

// for (var i = 10; i > 0; i--) {
//     document.write(i + ", ")
// }

// // c

// for(var i = 0; i <= 20; i++){

//     if(i % 2 == 0){
//         document.write(i + ", ")
//     }
// }

// // d

// for(var i = 0; i < 20; i++){

//     if(i % 2 != 0){
//        document.write(i + ", ")

//     }
// }

// // e

// for(var i = 1; i <= 20; i++){

//     if(i % 2 == 0){
//         document.write(i + "k, ")

//     }
// }

// Q9

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userPrompt = prompt("Search in Array.").toLowerCase();

// var flag = false;

// for (var i = 0; i < arr.length; i++) {
//   if (userPrompt == arr[i]) {
//     flag = true;
//   }
// }

// if (flag) {
//   alert("✅ " + userPrompt + " Found.");
// } else {
//   alert("❌ " + userPrompt + " not Found.");
//}

// // Q10

// var userText = prompt("Enter a word in capital latters.)
// var lowerText = userText.toLowerCase()

// alert(userText + " = " + lowerText)

// // Q11

// var userText = prompt("Enter a word in small letters.");
// var upperText = userText.toUpperCase();

// alert(userText + " = " + upperText);

// Q12

// var usreNum = prompt("Enter a number.");

// var userType;

// if (usreNum % 1 == 0) {
//     userType = Number(usreNum);

// }
// else {
//     userType = usreNum
// }

// alert("The Type Of " + usreNum+ " is: " + typeof userType);
