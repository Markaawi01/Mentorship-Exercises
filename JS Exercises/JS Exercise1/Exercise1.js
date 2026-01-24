

// Exercise One

let x=Number(prompt("Enter The First Number"));
let y=Number(prompt("Enter The Second Number"));

if(isNaN(x) || isNaN(y)){
  alert("Only Numbers are Allowed")
  console.log("Only Numbers are allowed")
}
else{
  let operation=prompt("Dooro Number \n1.Isku dar \n2. Kala jar \n3. Isku dhfuo \n4.Isku qeybi")
if(operation==="1"){
 // alert(x+" +"+y+" ="+(x+y))
  alert(x + " + " + y + " = " + (x + y));
  console.log(x + " + " + y + " = " + (x + y));
}
else if(operation==="2"){
  alert(x + " - " + y + " = " + (x - y));
  console.log(x + " - " + y + " = " + (x - y));
}
else if(operation==="3"){
  alert(x + " x " + y + " = " + (x * y));
  console.log(x + " x " + y + " = " + (x * y));
}
else if(operation==="4"){
   if (y === 0) {
    alert("Cannot divide by zero");
    console.log("Cannot divide by zero");
  } else {
    alert(x + " / " + y + " = " + (x / y));
      console.log(x + " / " + y + " = " + (x / y));
  }
}
else{
  alert("Sorry Invalid Operation is not allowed");
  console.log("Sorry Invalid Operation is not allowed");
}
}

