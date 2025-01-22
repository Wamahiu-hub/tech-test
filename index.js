
//let age = 25;
//let price= 10.99;
//let gpa = 2.1;

//console.log(typeof age)
//console.log(`you are ${age} years old`);
//console.log(`the price is $${price}`);
//console.log(`the gpa is ${gpa}`);

//let firstName ="Bro"
//let FavoriteFood ="Pizza"
//let email="Bro@gmail.com"

//console.log(typeof firstName);
//console.log(`My Name is ${firstName}`);
//console.log(`my favorite food is ${FavoriteFood}`);
//console.log(`my email is ${email}`);

//let online=true
//let ForSale=true
//let isStudent=true

//console.log(typeof online)
//console.log(`she is online: ${online}`)
//console.log(`this car is for sale: ${ForSale}`)
//console.log(`she is enrolled:${isStudent}`)

//let fullName = "Bro Code";
//let age = 25;
//let IsStudent = true;

//document.getElementById("p1").textContent =  `My name is ${fullName}`;
//document.getElementById("p2").textContent =  `I am ${age} years old`;
//document.getElementById("p3").textContent =  ` I am a student ${IsStudent}`

//let students=30;
//students=students+1
//students=students-1
//students=students*2
//students=students/2
//students=students**2
//console.log(students);

//let age= window.prompt ("how old are you")
//age= Number(age)
//age+=1

//console.log(age)

//const PI = 3.14259
//let radius;
//let Circumference;

//document.getElementById("MySubmit").onclick = function () {
    //radius= document.getElementById("MyText").value;
    //radius = Number (radius);
    //Circumference = 2 * PI * radius;
    //document.getElementById("myH3").textContent = Circumference + "cm"
//}

//const decreaseBtn = document.getElementById("decreaseBtn");
//const resetBtn = document.getElementById("resetBtn");
//const increaseBtn = document.getElementById("increaseBtn");
//const countLabel = document.getElementById("countLabel");
//
//increaseBtn.onclick=function(){
//    count++;
//    countLabel.textContent=count;
//}
//decreaseBtn.onclick=function(){
 //   count --;
   // countLabel.textContent=count;
//}
//resetBtn.onclick=function(){
    //count=0
    //countLabel.textContent=count
//}

//const myTEXT1 = document.getElementById("myTEXT1");
//const Mysubmit1 = document.getElementById("Mysubmit1");
//const resultElement = document.getElementById("resultElement");

//let age;

//Mysubmit1.onclick = function(){
   // age=myTEXT1.value;
    //age=Number(age);

   // if (age >= 100) {
    //    resultElement.textContent=`you are TOO old to enter this site`;
   // }
   // else if (age == 0){
    //    resultElement.textContent=`You must have been born on a certain date`;
   // }
    //else if (age>18){
   //     resultElement.textContent=`You  are old enough to enter this site`;
  //  }
  //  else if (age<0){
  //      resultElement.textContent=`you cant have negative years`;
  //  }
   // else {
   //     resultElement.textContent=`you must be 18+ to enter this site`;
 //   }
//}


//let userName= "BroCode"


//console.log(userName.toUpperCase());

//let phoneNumber = "123-456-7890"
//phoneNumber = phoneNumber.padEnd(20,("0"))
//console.log(phoneNumber)

//const temp = 30.1

//if (temp <=0 || temp <=30 ){
//  console.log("The weather is Good")
//}
//else{
  //console.log("The weather is Bad")
//}

//let loggedIn = false;
//let username;
//let password;

//while(!loggedIn){
 // username = window.prompt(`Please enter your username`);
  //password = window.prompt(`please enter your password`);

  //if(username === "myUsername" && password === "myPassword"){
   //   loggedIn = true;
   //   console.log(`You are logged in`);
 // }
  //else{
  //    console.log("Invalid credentials! Please try again");
 //   }

//}


const textBox = document.getElementById("textBox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelcius = document.getElementById("toCelcius")
const result = document.getElementById("result")
let temp;

function Convert (){
if (toFahrenheit.checked){
  temp = Number(textBox.value);
  temp = temp*9/5+32;
  result.textContent=temp + ("°F");
}
else if(toCelcius.checked){
  temp = Number(textBox.value);
  temp = (temp-32)*(5/9);
  result.textContent=temp + ("°C")
}
else{
  result.textContent="Select a unit";
}
}