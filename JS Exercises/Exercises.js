

// Exercise One

// let x=Number(prompt("Enter The First Number"));
// let y=Number(prompt("Enter The Second Number"));

// if(isNaN(x) || isNaN(y)){
//   alert("Only Numbers are Allowed")
//   console.log("Only Numbers are allowed")
// }
// else{
//   let operation=prompt("Dooro Number \n1.Isku dar \n2. Kala jar \n3. Isku dhfuo \n4.Isku qeybi")
// if(operation==="1"){
//  // alert(x+" +"+y+" ="+(x+y))
//   alert(x + " + " + y + " = " + (x + y));
//   console.log(x + " + " + y + " = " + (x + y));
// }
// else if(operation==="2"){
//   alert(x + " - " + y + " = " + (x - y));
//   console.log(x + " - " + y + " = " + (x - y));
// }
// else if(operation==="3"){
//   alert(x + " x " + y + " = " + (x * y));
//   console.log(x + " x " + y + " = " + (x * y));
// }
// else if(operation==="4"){
//    if (y === 0) {
//     alert("Cannot divide by zero");
//     console.log("Cannot divide by zero");
//   } else {
//     alert(x + " / " + y + " = " + (x / y));
//       console.log(x + " / " + y + " = " + (x / y));
//   }
// }
// else{
//   alert("Sorry Invalid Operation is not allowed");
//   console.log("Sorry Invalid Operation is not allowed");
// }
// }



//Exercise Two

// let a=15; let b="15";
// console.log(a==b) // True: Checks only. if the values are same
// console.log(a!=b);  // false. coz a and b are same value . so they are equal
// console.log(a===b)  // False. coz same value but different data type
// console.log(a!==b); // True. coze x data type is not equel to y data type 


// Exercise Three


// let isSunny=true; let isWeekend=false;
// console.log(isSunny && isWeekend) // False: you can not go to the beach
// console.log(isSunny|| isWeekend) // true: You can go to the beach 
// console.log(!isSunny)  //False: coz The opposite of True is False
// console.log(!isWeekend) // True: The opposite of false is True




// Exercise Four


// function calculate(n1, n2, operation) {

//   if (isNaN(n1) || isNaN(n2)) {
//     return "Only Numbers are Allowed";
//   }

//   if (operation == 1) {
//     return "Result of Addition: " + (n1 + n2);
//   }
//   else if (operation == 2) {
//     return "Result of Subtraction: " + (n1 - n2);
//   }
//   else if (operation == 3) {
//     return "Result of Multiplication: " + (n1 * n2);
//   }
//   else if (operation == 4) {
//     if (n2 == 0) {
//       return "Cannot divide by zero";
//     }
//     return "Result of Division: " + (n1 / n2);
//   }
//   else {
//     return "Invalid Operation";
//   }
// }


// let a = Number(prompt("Enter The First Number"));
// let b = Number(prompt("Enter The Second Number"));
// let op = prompt("Choose a number (1--4)\n1.Add\n2.Subtract\n3.Multiply\n4.Divide");

// let result = calculate(a, b, op);
// alert(result);



// Function Expression

// let  calculate=function(){
  
//   if (isNaN(n1) || isNaN(n2)) {
//     return "Only Numbers are Allowed";
//   }

//   if (operation == 1) {
//     return "Result of Addition: " + (n1 + n2);
//   }
//   else if (operation == 2) {
//     return "Result of Subtraction: " + (n1 - n2);
//   }
//   else if (operation == 3) {
//     return "Result of Multiplication: " + (n1 * n2);
//   }
//   else if (operation == 4) {
//     if (n2 == 0) {
//       return "Cannot divide by zero";
//     }
//     return "Result of Division: " + (n1 / n2);
//   }
//   else {
//     return "Invalid Operation";
//   }

// }


// Exercise Five 

// Arrow Function
// let  calculate=()=>{
  
//   if (isNaN(n1) || isNaN(n2)) {
//     return "Only Numbers are Allowed";
//   }

//   if (operation == 1) {
//     return "Result of Addition: " + (n1 + n2);
//   }
//   else if (operation == 2) {
//     return "Result of Subtraction: " + (n1 - n2);
//   }
//   else if (operation == 3) {
//     return "Result of Multiplication: " + (n1 * n2);
//   }
//   else if (operation == 4) {
//     if (n2 == 0) {
//       return "Cannot divide by zero";
//     }
//     return "Result of Division: " + (n1 / n2);
//   }
//   else {
//     return "Invalid Operation";
//   }

// }


// Exercise Six

let colors=["Green", "Blue","Red"];
// console.log(colors[0])
// console.log(colors[1])
// console.log(colors[2])


//Exercise Seven

// colors.push("Black")
// console.log(colors)
// colors.shift("Green");
// console.log(colors)

// Exercise Eight

// let car={
//   make:"1919",
//   name:"Sarif",
//   color:"White",
//   start:()=>{
//     console.log("The Car has Started")
//   }
// }
// console.log(car.make);
// console.log(car.name);
// console.log(car.color);
// console.log(car.start())



//Exercuse Nine


let car={
  make:"1919",
  name:"Sarif",
  color:"White",
  start:()=>{
    console.log("The Car has Started")
  }
}
console.log(car.make);
console.log(car.name);
console.log(car.color);
console.log(car.start())






