// const to_do_form=document.querySelector("#to_do_form")
// const to_do_input=document.querySelector("#to_do_input")
// const to_do_list=document.querySelector("#to_do_list")

// document.addEventListener("DOMContentLoaded",loadData)

// function loadData(){

//   let data=JSON.parse(localStorage.getItem("Tasks"))
//   console.log(data)
//   if(data){
//     data.forEach(task=>{
//     addTasktoDom(task)

//     })


//   }
// }


//  to_do_form.addEventListener("submit",addTask)

// function addTask(e){
// e.preventDefault();
//   // console.log("Added New Task")
//   const taskText=to_do_input.value.trim();
//   to_do_input.value="";
//   to_do_input.focus();
//   // console.log(taskText)
//   if(taskText!==""){
//     task={
//       id:Date.now(),
//       text:taskText,
//       completed:false
//     }

//     // Adding Tsk to the Dom
// addTasktoDom(task)
// saveToLocalStorage(task)
//   }
//   // console.log(tasks)
  
  
// }





//   function saveToLocalStorage(task){

//     let oldData=localStorage.getItem("Tasks")
//     if(oldData===null){
//       oldData=[]
//     }
//     else{
//       oldData=JSON.parse(oldData);
//     }
//     oldData.push(task)
//     localStorage.setItem("Tasks",JSON.stringify(oldData))

//   }

//   function addTasktoDom(task){
//   const li=document.createElement("li")
//   li.className=`to_do_item ${task.completed?"completed":""}`;
//   li.dataset.id=task.id;

//   li.innerHTML=`
//   <input type="checkbox" name="" class="complete-checkbox">
//     <span class="task">${task.text}</span>
//     <button id="edit_btn">Edit</button>
//     <button id="delete_btn">Delete</button>

//   `
//   // console.log(li)
// to_do_list.appendChild(li)
// attachEvenListers(li,task)

// }


// // Attach Event Listerns such update and Delete Buttons

// function attachEvenListers(li,task){
// const delete_btn=li.querySelector("#delete_btn")
// const edit_btn=li.querySelector("#edit_btn")

// delete_btn.addEventListener("click",function(){
//   // console.log(li,task)
//   handleDelete(li,task.id)

// })
// edit_btn.addEventListener("click",function(){
//   hadnleUpdat(li,task.id)
// })



// }
// function handleDelete(li,id){
//   let tasks=JSON.parse(localStorage.getItem("Tasks"))
//     tasks=tasks.filter(task=>task.id!=id);
//    localStorage.setItem("Tasks",JSON.stringify(tasks))
//    li.remove()

// }

// function hadnleUpdat(li,taskID){
//   const textSpan=li.querySelector(".task")
//   console.log(textSpan)
//   const newTask=prompt("Edi YOur Task",textSpan.textContent)
//    if(newTask!==null && newTask.trim()!==""){
//    // Update The local Storage
//     updatTheTask(taskID,newTask)
//     // Updae The dom
//     textSpan.textContent=newTask;
//     }


// }
// function updatTheTask(id, newtask){
//   const tasks = getTasksFromLocalStorage();

//   const updatedTasks = tasks.map(task => {
//     if (task.id == id) {
//       return { ...task, text: newtask };
//     }
//     return task;
//   });

//   localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
// }

// function getTasksFromLocalStorage(){
// const oldTask=JSON.parse(localStorage.getItem("Tasks"))||[]
// // console.log(oldTask)
// return oldTask;
// }

// start of commeted Section

// const reg_form=document.querySelector("#reg_form")
// const userName=document.querySelector("#userName")
//   const para=document.querySelector("#para")

//   document.addEventListener("DOMContentLoaded",loadData)
 
 
//   function loadData(){
//     let data=JSON.parse(localStorage.getItem("username"))
//     // console.log(data)
//     if(data){
//       data.forEach(name=>{
//         addDatatoDom(name)
        
//       })
//     }

   
// }

// reg_form.addEventListener("submit",saveData);

//   function saveData(e){
//   e.preventDefault();
//   const name=userName.value
//   addDatatoDom(name);              
// addDatatoLocalStorage(name);     
//   // console.log(userName.value)
//   //   addDatatoDom(userName);
//   //   addDatatoLocalStorage(userName.value);
  
//     userName.value=""
//   userName.focus()

// }

// function addDatatoDom(userName){
//   // this is displaying the data on the dom usig span
  
// //   const span=document.createElement("span")
// //  span.textContent=userName.value
// //   para.appendChild(span)
// //   para.appendChild(document.createElement("br"));

//   // this is time of using ul
//   const list=document.querySelector("#list")
//   const li=document.createElement("li");
//   li.innerHTML=userName
//   list.appendChild(li)
// }

// function addDatatoLocalStorage(userName){
// let olddata=localStorage.getItem("username")
//   if(olddata===null){
//     olddata=[];
//   }else{
//     olddata=JSON.parse(olddata)
//   }
//   olddata.push(userName)
//   localStorage.setItem("username",JSON.stringify(olddata))
// }

// End of Commnented Section//



// concept of Understanidng Async Function


async function fetchData(){

  try {
    const response= await fetch('data.json');
    const data=await response.json();
    data.forEach((xog)=>{
      console.log(xog)
      
    })
 
  } catch (error) {
    
  }


}

fetchData();