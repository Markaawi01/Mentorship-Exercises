
const to_do_form=document.querySelector('#to_do_form');
const to_do_input=document.querySelector('#to_do_input');
const to_do_list=document.querySelector('#to_do_list')

document.addEventListener("DOMContentLoaded",loadTasks)
function loadTasks(){
  // Get old tasks from the local host
const tasks=getTasksFromLocalStorage();
tasks.forEach(task=>{
  addTaskToDom(task)
})

}

to_do_form.addEventListener('submit',addTask)
function addTask(e){
  e.preventDefault();
  const taskText=to_do_input.value.trim();
  if(taskText!==""){
    const task={
    id:Date.now(),
    text:taskText,
    completed:false
  }
  addTaskToDom(task)
  saveTaskToLocalStorage(task);
  to_do_input.value=""
  to_do_input.focus();

  }

  }

function addTaskToDom(task){
const li=document.createElement("li");
  li.className=`todo-item ${task.completed?"completed":""}`
  li.dataset.id=task.id
  li.innerHTML=`
         <input type="checkbox" name="" id="" class="complete_checkbox"${task.completed?"checked":""}>
         <span class="task">${task.text}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>`

    to_do_list.appendChild(li)
    attachEventListeners(li,task)


}

function attachEventListeners(li,task){
  const deletebtn=li.querySelector(".delete-btn")
  const editbtn=li.querySelector(".edit-btn")
  const checkbox=li.querySelector(".complete_checkbox")
  
  
  
  deletebtn.addEventListener("click",function(){
    // console.log("Deleted ",task)
    handleDelete(task.id,li);

  })

  editbtn.addEventListener("click",function(){
    handleEdit(task.id,li)
  })


checkbox.addEventListener("change",function(){
    console.log("checked",checkbox.checked)

  toggleTaskCompletion(task.id,li,checkbox.checked)

})



}

function handleEdit(taskId,li){
  const taskSpan=li.querySelector(".task")
  console.log(taskSpan.textContent)
  const newtask=prompt("Edi Your Task",taskSpan.textContent)
  //  console.log(newtask)

   if(newtask!==null && newtask.trim()!==""){
   // Update The local Storage
    updatTheTask(taskId,newtask)
    // Updae The dom
    taskSpan.textContent=newtask;
    }


}

function handleDelete(id,li){
  let tasks=getTasksFromLocalStorage();
  tasks=tasks.filter(task=>task.id!=id);
   localStorage.setItem("tasks",JSON.stringify(tasks))

  console.log(tasks)
    li.remove();


}

function updatTheTask(id, newtask){
  const tasks = getTasksFromLocalStorage();

  const updatedTasks = tasks.map(task => {
    if (task.id == id) {
      return { ...task, text: newtask };
    }
    return task;
  });

  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

function toggleTaskCompletion(taskId,li, isCompleted){
  const tasks=getTasksFromLocalStorage();
  const task=tasks.find(task=>task.id==taskId)
  if(task){
    task.completed=isCompleted;
    localStorage.setItem("tasks",JSON.stringify(tasks))
    li.classList.toggle("completed",isCompleted);
  }
}

function saveTaskToLocalStorage(task){
const oldTask=getTasksFromLocalStorage()
  // console.log(oldTask)
  oldTask.push(task)
  localStorage.setItem("tasks",JSON.stringify(oldTask))

}
function getTasksFromLocalStorage(){
const oldTask=JSON.parse(localStorage.getItem("tasks"))||[]
// console.log(oldTask)
return oldTask;
}


