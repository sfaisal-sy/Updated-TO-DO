
tbody.addEventListener('click', (event) => {
    if(event.target.classList.contains('edit-btn')){
        let parentRow = event.target.closest('tr');
        let taskId = Number(parentRow.getAttribute('data-id'));
        
        let taskToEdit = taskArray.find(task => task.id === taskId);

        let editTask = prompt('Edint your Task', taskToEdit.taskText);

        if(editTask !== null && editTask.trim() !== ''){

            taskArray = taskArray.map(task => {
                if(task.id === taskId){
                    return {...task, taskText: editTask.trim()};
                }
                return (task)
            });
            saveTaskArrayToLS();
            renderTasks();
        }
    }
})
