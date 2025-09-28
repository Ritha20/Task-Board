let tasks = [
    {id:1, name: "Completing Task Board Assignment", dueDate: "2025-09-28",status: "Pendding"},
    {id:2, name:"studying objects",dueDate: "2025-10-05",status: "pending",},
    {id:3, name:"shopping", dueDate:"2025-10-20", status:"pending"},
    {id:4, name:"writing", dueDate:"2025-10-01", status:"completed"},
    {id:5, name:"preparing", dueDate:"2025-11-04", status:"pending"}
];
let nextId = 6;

// Rendering task to DOM
function renderTasks() {
    const todoContainer = document.querySelector('.bg-amber-100:first-child .space-y-2');
    const doneContainer = document.querySelector('.bg-amber-100:nth-child(2) .space-y-2');

    todoContainer.innerHTML = '';
    doneContainer.innerHTML = '';

    tasks.forEach(task => {
        const taskCard = createTaskCard(task);
        if (task.status === 'pending') {
            todoContainer.appendChild(taskCard);
        } else if (task.status === 'completed') {
            doneContainer.appendChild(taskCard);
        }
    });
}
function createTaskCard(task) {
    const taskElement = document.createElement('div');
    taskElement.className = 'bg-white p-3 rounded shadow task-card';
    taskElement.setAttribute('data-task-id', task.id);
    
    const displayDate = task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date';
    
    taskElement.innerHTML = `
        <div class="flex justify-between items-start mb-2">
            <h3 class="font-semibold ${task.status === 'completed' ? 'line-through text-gray-500' : ''}">${task.name}</h3>
            <div class="flex space-x-1">
                <button class="edit-btn text-amber-600 hover:text-amber-800" data-id="${task.id}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete-btn text-red-600 hover:text-red-800" data-id="${task.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        <div class="flex justify-between items-center text-sm">
            <span class="text-gray-600">Due: ${displayDate}</span>
            <button class="status-btn ${task.status === 'pending' ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 hover:bg-gray-600'} text-white px-2 py-1 rounded text-xs" data-id="${task.id}">
                ${task.status === 'pending' ? 'Mark Complete' : 'Mark Incomplete'}
            </button>
        </div>
    `;
    
    return taskElement;
}
// Add Task Functionality
function setupAddTaskForms() {
    const addTaskForms = document.querySelectorAll('.add-task-form');
    
    addTaskForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const taskNameInput = this.querySelector('input[type="text"]');
            const dueDateInput = this.querySelector('input[type="date"]');
            const taskName = taskNameInput.value.trim();
            const dueDate = dueDateInput.value;
            
            // Validation
            if (!taskName) {
                alert('Task name is required!');
                return;
            }
            
            // Create new task
            const newTask = {
                id: nextId++,
                name: taskName,
                dueDate: dueDate,
                status: 'pending'
            };
            
            // Add to tasks array
            tasks.push(newTask);
            
            // Re-render tasks
            renderTasks();
            
            // Reset form
            taskNameInput.value = '';
            dueDateInput.value = '';
            
            console.log('New task added:', newTask);
        });
    });
}