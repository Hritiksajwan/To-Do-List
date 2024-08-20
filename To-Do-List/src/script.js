document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(text) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span class="task-text">${text}</span>
            <button class="complete-btn" onclick="toggleComplete(this)">Complete</button>
            <button class="remove-btn" onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(taskItem);
    }

    window.toggleComplete = function(button) {
        const taskItem = button.parentElement;
        taskItem.classList.toggle('completed');
    }

    window.removeTask = function(button) {
        const taskItem = button.parentElement;
        taskList.removeChild(taskItem);
    }
});
