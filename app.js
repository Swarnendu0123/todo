let taskName = document.querySelector("input");
let createtaskBtn = document.querySelector(".createTask");
let list = document.querySelector("ul");
let startTime = document.querySelector(".startTime")
let endTime = document.querySelector(".endTime")

//function to add new task
let addNewTask = () => {
    let element = document.createElement("li");
    let dltBtn = document.createElement("button");
    let time = document.createElement("span");
    time.innerText = " " + startTime.value + " - " + endTime.value + " ";
    console.log(time)
    element.innerText = taskName.value;
    dltBtn.innerText = "Delete";
    dltBtn.classList.add("delete");
    dltBtn.classList.add("greenBtn");
    element.appendChild(time);
    element.appendChild(dltBtn);
    list.append(element);
    taskName.value = "";
}

createtaskBtn.addEventListener("click", addNewTask)

taskName.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addNewTask
    }
})

list.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        event.target.parentElement.remove();
    }
})