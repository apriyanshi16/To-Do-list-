const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const progress = document.getElementById("progress");

function addTask() {
    if (taskInput.value === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <div class="task-left">
            <input type="checkbox" onchange="toggleDone(this)">
            <span>${taskInput.value}</span>
        </div>
        <div class="actions">
            <button onclick="editTask(this)">✏️</button>
            <button onclick="deleteTask(this)">🗑️</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";

    updateProgress();
}

function toggleDone(checkbox) {
    const li = checkbox.closest("li");
    li.classList.toggle("done", checkbox.checked);
    updateProgress();
}

function deleteTask(button) {
    button.closest("li").remove();
    updateProgress();
}

function editTask(button) {
    const li = button.closest("li");
    const span = li.querySelector("span");

    const newText = prompt("Edit task:", span.innerText);
    if (newText !== null && newText.trim() !== "") {
        span.innerText = newText;
    }
}

function updateProgress() {
    const totalTasks = document.querySelectorAll("li").length;
    const completedTasks = document.querySelectorAll("li.done").length;

    const percent = totalTasks === 0
        ? 0
        : (completedTasks / totalTasks) * 100;

    progress.style.width = percent + "%";
}
