document.getElementById('add-btn').addEventListener('click', function () {
    const taskText = document.getElementById('todo-input').value;
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);
        li.addEventListener('click', function () {
            li.classList.toggle('completed');
        });
        deleteBtn.addEventListener('click', function () {
            li.remove();
        });
        document.getElementById('todo-list').appendChild(li);
        document.getElementById('todo-input').value = '';
    }
});
