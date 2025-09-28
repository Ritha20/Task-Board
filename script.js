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
