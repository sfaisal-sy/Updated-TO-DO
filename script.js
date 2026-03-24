let inputTask = document.getElementById('input-task');
let addTaskBtn = document.getElementById('add-btn');
let tbody = document.getElementById('tbody');


let taskArray = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTaskArrayToLS () {
    localStorage.setItem('tasks', JSON.stringify(taskArray));
};
saveTaskArrayToLS();

function getTasksArrayFromLS () {
    taskArray = JSON.parse(localStorage.getItem('tasks')) || [];
    renderTasks();
};


    addTaskBtn.addEventListener('click', () => {
        let inputValue = inputTask.value.trim();

        if (inputValue === '') {
            alert ('ENTER TASK');
            inputTask.focus();
            return;
        }

        let newTask = {
            id: Date.now(),
            taskText: inputValue,
            status: false
        };

        taskArray.push(newTask);
        saveTaskArrayToLS();
        renderTasks()

        inputTask.value = '';
        inputTask.focus();
        
    });

    function renderTasks (data = taskArray) {
        tbody.innerHTML = '';

        if(data.length === 0){
            tbody.innerHTML = `
                <tr>
                    <td colspan='5' class='text-center'>NO TASK EXISTS</td>
                </tr>
            `;
            return;
        }

        data.forEach( (task, index) => {

            let isComplited = task.status ? 'strike-through' : '';
            let isChecked = task.status ? 'checked': '';
            
            tbody.innerHTML += `
                    <tr data-id='${task.id}'>
                        <td>${index + 1}</td>

                        <td class='${isComplited}'> ${task.taskText} </td>

                        <td class='text-center'>
                        <input type='checkbox' class='check-status' ${isChecked}>
                        </td>
                        <td ><button class='btn btn-primary edit-btn'>EDIT</button></td>
                        <td><button class='btn btn-danger delete-btn'>DELETE</button></td>
                    </tr>
            `;
            
        });
    }
    renderTasks();





// localStorage.clear();


// let tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];

// function saveTasksArrayToLS () {
//     localStorage.setItem('tasks', JSON.stringify(tasksArray));
// };
// saveTasksArrayToLS();

// function getTasksArrayFromLS () {
//     tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
//      renderTasks();
    
// }
// getTasksArrayFromLS();


// addTaskBtn.addEventListener('click', () => {
//     let inputValue = inputTask.value.trim();

//     if(inputValue === '') {
//         alert('Enter Task')
//         inputTask.focus();
//         return;
//     };

//     let taskObject = {
//         id : Date.now(),
//         task : inputValue,
//         status : false
//     };  

//     tasksArray.push(taskObject);
//     saveTasksArrayToLS();
//     renderTasks();
// });

// function renderTasks () {
//     tbody.innerHTML = '';  
    
//     if(tasksArray.length === 0){
//         tbody.innerHTML = `<tr class='text-center'><td colspan="5">NO TASK EXISTS </td></tr>`
//         inputTask.focus();
//         return;
//     };

//     tasksArray.forEach ((task, index) => {

//         const isComplited = task.status ? 'strike-through' : '';
//         const isChecked = task.status ? 'checked' : '';
      
//         tbody.innerHTML += `
//             <tr data-id = ${task.id}>
//                 <td>${index + 1}</td>
//                 <td class=${isComplited}>${task.task}</td>
//                 <td class='text-center'>
//                 <input type="checkbox" class='check-status' ${isChecked}>
//                 </td>
//                 <td><button class="btn btn-primary">EDIT</button></td>
//                 <td><button class="btn btn-danger">DELETE</button></td>

//             </tr>
//         `;
//     })
// };
// renderTasks()



// localStorage.clear()