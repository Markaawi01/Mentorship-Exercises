
const form = document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const confirmPassword=document.querySelector('#confirmPassword')
const error = document.querySelector('#error');
const success=document.querySelector('#success')






form.addEventListener("submit", function(event){
  event.preventDefault();

  error.textContent="";
  success.textContent="";

  const isUserNameValid=validateUserName();
  const isEmailValid=validateEmeail();
  const isPasswordValid=validatePassword();
  const isConfrimPasswordValid=validateConfirmPassword();
  
  if(!isUserNameValid){
    username.focus();
    return
  }
  else if(!isEmailValid){
    email.focus();
    return
  }
  else if(!isPasswordValid){
    password.focus();
    return
  }
  else if(!isConfrimPasswordValid){
    confirmPassword.focus();
    return
  }
success.textContent="Registration Success Full"



});

function validateUserName(){
  if(username.value.trim()===''){
    // error
    setError(username,'user name is required')
    return false
  }
  else{
    //success
    setSuccess(username);
    return true;
  }
}

function validateEmeail(){
  		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if(!email.value.match(emailPattern)){
    setError(email,"Please Enter A valid Email")
    return  false
  }
  else{
    setSuccess(email)
    return true
  }
  
}
function validatePassword(){
  if(password.value.length<8){
    setError(password,"Password musbe be atlease 8 characters")
    return false
  }
  else{
    setSuccess(password)
    return true
  }
}

function validateConfirmPassword(){
  if(confirmPassword.value==""){
        setError(confirmPassword,"Password dont match")
}
else if(password.value!==confirmPassword.value){
    setError(confirmPassword,"Password dont match")
    return false
  }
  else{
    setSuccess(confirmPassword)
    return true
  }
}

function setError(element,message){
  element.classList.add('invalid')
  element.classList.remove('valid')
  error.textContent=message;
}

function setSuccess(element){
  element.classList.add('valid')
  element.classList.remove('invalid')

}



