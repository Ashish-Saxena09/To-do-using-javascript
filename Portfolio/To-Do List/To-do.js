let inputBox = document.querySelector("#input-box");
let listContainer = document.querySelector("#list-container");
let btn = document.querySelector("button");

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You must write something here!");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value.trim();
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

btn.addEventListener("click", () => {
  addTask();
});

listContainer.addEventListener("click", (e)=>{
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked")
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

inputBox.addEventListener("keydown",(e)=>{
  if(e.key === "Enter"){
    addTask();
  }
});

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
