
tbody.addEventListener('click', (event) => {
    
    if(event.target.classList.contains('delete-btn')){

        
        const confirmDelete = confirm('Are you sure');
        
        if(confirmDelete){
            const parentRow = event.target.closest('tr');
            const taskId = Number(parentRow.getAttribute('data-id'));
            
            taskArray = taskArray.filter(task => task.id !== taskId);

            saveTaskArrayToLS();
            renderTasks();
        }
        
    }
   

})