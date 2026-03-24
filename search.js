
const filterDropdown = document.getElementById('filter-tasks');

filterDropdown.addEventListener('change', (e) => {
    const filterValue = e.target.value;
    let filteredList = [];

    if (filterValue === 'completed') {
        filteredList = taskArray.filter(task => task.status === true);
    } 
    else if (filterValue === 'pending') {
        filteredList = taskArray.filter(task => task.status === false);
    } 
    else {
        filteredList = taskArray;
    }

    renderTasks(filteredList);
});