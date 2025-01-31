// //....firstly getting the form and input and also creating a div (tasks)  here ..............................................

const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const tasks = document.querySelector(".tasks");
// // ...............adding event listener to form on submit.....................................
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userData = input.value;

  // // ........check if input value is empty.........
  if (!userData) {
    alert("No task to add , Create a one ");
    return;
  }
  // // .....creating other div for single task and adding class to it .........
  const task = document.createElement("div");
  task.classList.add("task");
  task.classList.add("my-4");


  // // .....creating other div for single content inside task div  and adding class to it .........
  const content = document.createElement("div");
  content.classList.add("content");

  // // .....creating input for single task input inside content div and adding classes to it .........
  const taskInput = document.createElement("input");
  taskInput.classList.add("text");
  taskInput.classList.add("bg-light");
  taskInput.classList.add("form-control");
  taskInput.classList.add("my-1");
  taskInput.value = userData;
  taskInput.setAttribute("readonly", "readonly");
  taskInput.type = "text";

  // // ......appending these divs to their parents as children...........
  content.appendChild(taskInput);
  task.appendChild(content);
  tasks.appendChild(task);

  // // ......creating action div and adding class to it..........
  const action = document.createElement("div");
  action.classList.add("action");

  // //  creating buttton for edit and delete and adding classes to it and appending as children for action div.........
  const editBtn = document.createElement("button");
  editBtn.classList.add("btn");
  editBtn.classList.add("btn-warning");
  editBtn.innerHTML = "Edit";
  editBtn.classList.add("me-2");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn");
  deleteBtn.classList.add("btn-danger");
  deleteBtn.innerHTML = "Delete";

  action.appendChild(editBtn);
  action.appendChild(deleteBtn);
  task.appendChild(action);

  // // // ....on submittiing the form we need to clear the input field...........
  input.value = "";

  // // .....edit user data that has been added .............
  editBtn.addEventListener("click", ()=> {
    if (editBtn.innerHTML == "Edit") {
      taskInput.removeAttribute("readonly");
      editBtn.innerHTML="Save";
      taskInput.focus();
    }else{
      taskInput.setAttribute("readonly" , "readonly");
      editBtn.innerHTML = "Edit";
    }
  });

  // // ........delete user data..............
  deleteBtn.addEventListener('click' , ()=>{
    tasks.removeChild(task)
  });
});
