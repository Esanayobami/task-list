const addTaskButton =  document.getElementById("addTask");
const taskContainer = document.getElementById("todoLists");
const inputTasklist = document.getElementById("inputTask");
let paragraph = document.createElement("p")

addTaskButton.addEventListener("click" , function(){
    let paragraph = document.createElement("p")
    paragraph.innerText=inputTasklist.value;
    paragraph.classList.add("p");
    taskContainer.appendChild(paragraph);
    inputTasklist.value= "";
    inputTasklist.value===0 ? alert("add a task"):alert("ok");
} 

)
paragraph.addEventListener("dblclick" , function(){
    taskContainer.removeChild(paragraph);
})
localStorage.setItem("ok" , paragraph.innerText);