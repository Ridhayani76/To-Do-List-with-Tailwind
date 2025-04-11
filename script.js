const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write your Task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        // Add Tailwind Style
        li.classList.add(
            "list-none",
            "text-[17px]",
            "py-[12px]",
            "pl-[50px]",
            "pr-[8px]",
            "select-none",
            "cursor-pointer",
            "relative",
            // custom class from CSS
            "before-unchecked"
        );

        listContainer.appendChild(li);

        // For Delete Task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        // Add Tailwind Style
        span.classList.add(
            "absolute",
            "right-0",
            "top-[5px]",
            "w-[40px]",
            "h-[40px]",
            "text-[22px]",
            "text-[#555]",
            "leading-[40px]",
            "text-center",
            "rounded-full",
            "hover:bg-[#edeef0]"
        )

        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("before-unchecked");
        e.target.classList.toggle("before-checked");
        e.target.classList.toggle("text-[#555]");
        e.target.classList.toggle("line-through");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}