

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

// let colors=["Green", "Blue","Red"];
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




// Exercise Ten



// let libraray=[
//   {
//     Author:"Mohamed",
//     title:"Trends of Technlogy in the world",
//     year:"2025"
//   },
//   {
//     Author:"Farah",
//     title:"AI In health",
//     year:"2025"
//   },
//   {
//     Author:"Halima",
//     title:"Tresns OF AI In Softeare ENgineering",
//     year:"2026"
//   }
  
// ]


// console.log(libraray[0].title)
// console.log(libraray[1].Author)
// console.log(libraray[0])
// console.log(libraray[1])
// console.log(libraray[2])
// console.log(libraray[0].Author)


// Exercise Eleven

// for(let i=1; i<=50; i++){
//   console.log(i)
// }


// Exercise Twelve

// let fruits=["Banana","Apple","Mango","Orange","Olive"]
// for(let i=0; i<fruits.length; i++){
//   console.log(fruits[i])
// }

// Exercise Thirteen

// let i=5;
// while(i>0){
//   console.log(i)
//   i--;
// }

// Exercise Fourteen

// let number;
// do{
//   number=prompt("Enter a number greater than 10")
// }while (number<=10);

// console.log("Good Luck !")



// For of Example

// let students=["Ali", "Aish ","Nor "]
// for(let student of students){
//   console.log(student)
// }


// let cours="Programming Language Java"
// for(let c of cours){
//   console.log(c)
// }

// Example of For in 

// let students=[
//   {name:"Farah",age:22,city:"Istanbul"},
//     {name:"Nor",age:22,city:"Cambala"}

// ]
// let student;
// for( student of students){
//   console.log(student)
  

// }
// for(let key in student){
//   console.log(student[key])
// }



// Exercise Fivteen
// let people = [
//   { name: "Ali", age: 22, city: "Mogadishu" },
//   { name: "Omar", age: 34, city: "Kambala" },
//   { name: "Farah", age: 25, city: "Istanbul" }
// ];

// for (let person of people) {        
//   for (let key in person) {         
//     console.log(key + ": " + person[key]);
//   }
//   console.log("----");             
// }

//Exercise Sixsteen

// let score=prompt("Enter Your Scopr")
// if(score>50){
//   alert("You Passed")
// }
// else{
//   alert("You Failed")
// }
// Exercise Seventeen

// let tem=prompt("Enter The Temperature")
// if(tem<=0){
//   alert("It is Very Cold")
// }
// else if(tem>0 & tem<20){
//   alert("it is Cold")
// }
// else if(tem>20&tem<25){
//   alert("It is Warm")
// }
// else if(tem>25){
//   alert("It is Hot")
// }


// Exercise Eighteen

// let grade=prompt("Enter YOur Grade")

// const message=grade>=60?"You Passed":"You faled";
// alert(message)

// Exercise Nineteen

// let numbers=[1,2,3,4,5]
// numbers.forEach((number)=>{
//   console.log("I like Number "+number)
// })

// Example :  Map method

// let numbers=[1,2,3,4,5,6];


// const newNumbers=numbers.map((number)=>number) // Return Only numbers 1,2,3,4,5,6
// const newNumbers1=numbers.map((number)=>number*2) // return numbers multiplelied by two 2,,4,6,8,10 .
// console.log(newNumbers)
// console.log(newNumbers1)

// Exercise Twenty

// let fruits=["anapplee","banana","Cherrey"]
// const newFruits=fruits.map((fruit)=>fruit)

// for(let i=0; i<newFruits.length; i++){
// console.log(newFruits[i].length)

// }

// Example  filter()

// let numbers=[1,2,3,4,5,6,7,8,9,10]
// const evenNumbers=numbers.filter((number)=>number%2==0)
// console.log(evenNumbers)


// let grades=[20,30,40,50,60,70,80,90,100]
// let passedgrades=grades.filter((grade)=>grade>=60)
// console.log(passedgrades)


// Example  reduce()


// let numbers=[1,2,3,4,5]
// let sum=numbers.reduce((total,num)=>total+num,0)
// console.log(sum)

// Exercise Twenty One

// let numbers=[1,2,3,4,5]
// let production=numbers.reduce((total,num)=>total*num,1)
// console.log(production)


// Execise Twenty Two

// let colors=["red","green","blue"]

// const[color1,color2,color3]=colors;
// console.log(color1);console.log(color3)

// Exercise Twenty Three

// let cars={make:"Toyota",Model:"Crolla",Year:"2022"};

// const {make,Model,year}=cars
// console.log(make);console.log(Model)

// Exercise Twenty Four  (default parameter)

// function calculateArea(width,height=width){
//   console.log(`The Aerais: ${width*height}`)
// }
// calculateArea(3)

// // Example of Spread and Rest Operators

// let numbers=[1,2,3,4,5,6,7];
// const allNumbers=[...numbers, 8,9,10]
// console.log(allNumbers)

// Rest operator

// function sum(...numbers){
//   return numbers.reduce((total,num)=>total+num,0)

// }
// console.log(sum(10,10,10))



// Exercise Tweenty Five

// let numbers=[10,11,12,13,14,15];
// const allNumbers=[...numbers, 16,17,18,19,20]
// console.log(allNumbers)

// function multiplication(...numbers){
//   return numbers.reduce((total,num)=>total*num,1)

// }
// console.log(multiplication(1,2,3,4,5))

// Example of A syncronous

// function fetchUserDataSync(){
//   alert("Feching the user Data")
//   return {id:2233, name:"Omar"}
// }
// console.log("Starting the user data")
// const user=fetchUserDataSync();
// console.log("user data:", user)
// console.log("The messeg is blocking utill the user data is fetched")





// function getUserData(callback){

//   setTimeout(()=>{
//     const user={id:2233, name:"Ali"}
//     callback(user)
// },3000)
// }

// getUserData(function(user){
//   console.log(user)
// })



// Exercise 26: Blcoking Function

// function gettingAPI(){
//   alert("found API Data")
//   return {user:"Nor",tell:"6543232"}
// }
// console.log("Getting APIs From the web")
// const user=gettingAPI()
// console.log("Here is the data gotten form the  API",user)

// Non blocking Function

// function reciveData(callback){

//   setTimeout(() => {
//     const user={id:5566,name:"Xalimo"}
//     callback(user)
    
//   }, 2000);

// }

// reciveData(function(user){
//   console.log(user)

// })

// Example of Promis

// function fetchUserData(){
// return new Promise((resolove, reject)=>{
//       setTimeout(() => {
//       const success=false;
//       if(success){
//         resolove({id:2233,name:"Farax"})
//       }
//       else{
//         reject("Failed to fetch user data")
//       }
//     },2000);

//   })

// }

// fetchUserData().then((data)=>console.log("User Data",data))
// .catch((err)=>console.log(err))

// Exercise Twenty Seven

function getUserData(){
 return new Promise((resolove,reject)=>{
  setTimeout(() => {
    const success=false;
    if(success){
      resolove({id:2233,name:"salad"})
    }
    else{
      reject("Failed to get user data")
    }
    
  }, 3000);

 })

}

// getUserData().then((data)=>console.log(data)).catch((err)=>console.log(err))

// Exercise Twenty Eight

//  async function displayUserData(){
//   try{
//   const user =await getUserData();
//   console.log(user)

// }catch(err){
//     console.log(err)
//  }
//  }

//  displayUserData();


 // Example of Fetchng Data 

//  async function fetchData(){
//   console.log("Star Fetchting Data")
//   const response =await fetch('data.json')
//   const data=await response.json();
//   console.log(data)
//   console.log("Fetcing Data Complet ")

//  }

//  fetchData();

 // Exercise Twenty Nine

 
//  async function fetchData(){
//   console.log("Star Fetchting Data")
//   const response =await fetch('data.json')
//   const data=await response.json();
//   console.log(data)
//   console.log("Fetcing Data Complet ")

//  }

//  fetchData();

 // More On Call Back Examples

//  function operate(a,b,callback){
//   return callback(a,b)
//  }
//  function add(a,b){
//   return a+b
//  }

//  function subtruct (a,b){
//   return a-b
//  }

//  // Exercise Thirty

//  function multiply(a,b){
//   return a*b
//  }

//  function divide(a,b){
//   return a/b
//  }

//  console.log("Addition",operate(5,2,add))
//  console.log("Subtruction",operate(3,2,subtruct))
//  console.log("Multiplicaion",operate(4,4,multiply))
//  console.log("Devision",operate(10,2,divide))


// HTTP REQUEST

async function fetchData(){

try {
  console.log("Start Feching Data")
  const response= await fetch('https://jsonplaceholder.typicode.com/posts')
  if(!response.ok){
    throw new Error(`Failed to Fetch Data Http Error ${reponse.status}`)
  }

  const data=await response.json();
  console.log(data)
  
} catch (error) {
  console.log(error)
  
}

}

//fetchData()

// Making http request  uing Post method

// async function postData(){

//   try {
//     const response=await fetch('https://jsonplaceholder.typicode.com/posts',{
//       method:'POST',
//       body:JSON.stringify({
//         title:'Web Dev Farah',
//         body:'It is one of the most skills intended to  develop webs',
//         userID:1
//       }),
//       headers:{
//         'Content-type': 'application/json; charset=UTF-8'
//       }

//     })

//     if(!response.ok){
//       throw new Error(`Http Error ${response.status}`)
//     }
//      console.log("Before Json ",response)
//     const data = await response.json();
//     console.log(data)
    
//   } catch (error) {
//     console.log(error)
    
//   }
// }
//postData();


// Exercise Thirty One
async function getUsers(){
  try {
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    console.log("Start Fetching Data")
    if(!response.ok){
      throw new Error("Http Error",response.status)
    }

    const data=await response.json();
    console.log(data)
    
  } catch (error) {
    console.log(error)
    
  }
}

// getUsers();


const para=document.querySelector('#pp')
console.log(para)
const paras=document.querySelectorAll('.ppp')[0]
console.log(paras)

const heading1=document.querySelector('#heading1')
function changeContent(){
heading1.textContent="Wellcomet  to my First Web Page "

}

const list=document.querySelector('#list')

function addItem(){
const list=document.querySelector('#list')
const newItem=document.createElement('li')
newItem.textContent='Item3'
list.appendChild(newItem)
// console.log(newItem)
}

function removeEelement(){
 if(list.lastChild){
  list.removeChild(list.lastChild)

 }
}


// Exercise Thirty Four

const mylist=document.querySelector('#mylist')
function addNewSubject(){
  const newSubject=document.createElement('li')
  newSubject.textContent='New Subject'
  mylist.appendChild(newSubject)
}

function removeSubject(){
  if(mylist.lastChild){
      mylist.removeChild(mylist.lastChild)

  }
}


function changeImage(){
  const img=document.querySelector('#img')
  const url=prompt("Enter The Url of The Image")
  img.setAttribute('src', url)
}

// Exercise  Thirty Five

function changeImage(){

  const img = document.querySelector('#img')

  const url = prompt("Enter the URL of the image")
  const border = prompt("Enter the border size (example: 2)")
  const color = prompt("Enter the border color")
  const border_radius = prompt("Enter the border radius (example: 10)")
  const img_width = prompt("Enter the width of the image (example: 400)")
  const img_height = prompt("Enter the height of the image (example: 300)")

  img.setAttribute('src', url)

  img.style.border = border + "px solid " + color
  img.style.borderRadius = border_radius + "px"
  img.style.width = img_width + "px"
  img.style.height = img_height + "px"

}







