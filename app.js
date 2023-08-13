let heading = document.querySelector("h1");
let taskName = document.querySelector("input");
let createtaskBtn = document.querySelector(".createTask");
let list = document.querySelector("ul");
let startTime = document.querySelector(".startTime")
let endTime = document.querySelector(".endTime")

//function to add new task
let addNewTask = () => {
    let element = document.createElement("li");
    let dltBtn = document.createElement("button");
    let completeBtn = document.createElement("button");

    let time = document.createElement("span");
    time.innerText = " " + startTime.value + " - " + endTime.value + " ";
    element.innerText = taskName.value;
    dltBtn.innerText = "Delete";
    completeBtn.innerText = "Completed";
    heading.innerText = "Task Added !!!";
    setTimeout(() => {
        heading.innerText = "Little Step, Achieve big"
    }, 3000)
    dltBtn.classList.add("delete");
    dltBtn.classList.add("greenBtn");
    completeBtn.classList.add("completed");
    completeBtn.classList.add("greenBtn");
    element.appendChild(time);
    element.appendChild(dltBtn);
    element.appendChild(completeBtn);
    list.append(element);
    taskName.value = "";
}

createtaskBtn.addEventListener("click", addNewTask)

taskName.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addNewTask();
    }
})

list.addEventListener("click", function (event) {
    console.dir(event.target.textContent)
    if (event.target.nodeName == "BUTTON") {
        event.target.parentElement.remove();
        if (event.target.textContent === "Completed") {
            heading.innerText = "Congratulations!! You have completed one task"
            setTimeout(() => {
                heading.innerText = "Little Step, Achive Big"
            }, 5000)
        }else{
            heading.innerText = "Task deleted"
            setTimeout(() => {
                heading.innerText = "Add your next task"
            }, 5000)
        }
    }
})