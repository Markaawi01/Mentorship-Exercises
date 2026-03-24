
const switch_btn=document.querySelector('#switch_btn')

switch_btn.addEventListener('click',swithcMode)

function swithcMode(){

  document.body.classList.toggle("darkmode")
  switch_btn.classList.toggle("darkmode")

  if(document.body.classList.contains("darkmode")){
    switch_btn.textContent="Toggle to Light Mode"
    localStorage.setItem("mode","dark")
  }
  else{
    switch_btn.textContent="Togle to Dark Mode"
    localStorage.setItem("mode","light")
  }
}


window.addEventListener("DOMContentLoaded",function(){

  const saveMode=localStorage.getItem("mode")
  console.log(saveMode);

  if(saveMode==="dark"){
    document.body.classList.add("darkmode")
    switch_btn.textContent="Toggle to Light Mode"
  }
  else{


  }

})