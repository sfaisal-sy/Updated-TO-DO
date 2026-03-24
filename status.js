tbody.addEventListener('change', (event) => {

    if(event.target.classList.contains('check-status')){

        let getParentRow = event.target.closest('tr');
        let taskId = Number(getParentRow.getAttribute('data-id'));

        taskArray = taskArray.map(task => {

            if(task.id === taskId){
                return {...task, status: event.target.checked};
            }
            return task;
        })
        saveTaskArrayToLS();
        renderTasks()
    }
})

/*

  tbody.innerHTML += `
                    <tr data-id='${task.id}'>
                        <td>${index + 1}</td>

                        <td class='${isComplited}'> ${task.taskText} </td>

                        <td class='text-center'>
                        <input type='checkbox' class='check-status' ${isChecked}>
                        </td>
                        <td ><button class='btn btn-primary'>EDIT</button></td>
                        <td><button class='btn btn-danger'>DELETE</button></td>
                    </tr>
            `;
            
        });
    }

*/

// tbody.addEventListener('change', (event) => {
    
//     if(event.target.classList.contains('check-status')) {
        
//         let parentRow = event.target.closest('tr');
//         let taskId = Number(parentRow.getAttribute('data-id'));

//         tasksArray = tasksArray.map(task => {
//             if(task.id === taskId) {
//                 return {...task, status: event.target.checked}
//             }
//             return task;
//         })
//         saveTasksArrayToLS();
//         renderTasks()
//     }
// })





// tbody.addEventListener('change', (event) => {

//     if(event.target.classList.contains('checkbox-status')){
        
//         let parentRow = event.target.closest('tr');
//         let taskId = Number(parentRow.getAttribute('data-id'));

//        tasksArray =  tasksArray.map(task => {
//             if(task.id === taskId){
//                 return { ...task, status: event.target.checked}
//             }
//             return task;
//         })

//        savetTasksArrayToLS();
//       renderTask();
//     }
// })


// tbody.addEventListener('change', (event) => {

//     if(event.target.classList.contains('checkbox-status')) {
        
//         let parentRow = event.target.closest('tr');
//         let taskId = Number(parentRow.getAttribute('data-id'));
        
//         tasksArray = tasksArray.map (task => {
            
            
//             if(task.id === taskId) {
//                   return { ...task, status: event.target.checked };
                  
//             }
//             console.log(task)
//             return task;

//         });
       
//         savetTasksArrayToLS();
//         loadTasksArrayFromLS();

//     }
// })