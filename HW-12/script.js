const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

addTodoButton.addEventListener('click', () => {
  const titleInput = document.getElementById('title');
  const descriptionInput = document.getElementById('description');
  const prioritySelect = document.getElementById('priority');

  const title = titleInput.value;
  const description = descriptionInput.value;
  const priority = prioritySelect.value;

  const todoItem = document.createElement('li');
  const todoItemTitle = document.createElement('h2');
  const todoItemDescription = document.createElement('p');
  const todoItemPriority = document.createElement('span');
  todoItemPriority.classList.add('todo-list--priority-mark');
  const todoItemDeleteButton = document.createElement('button');
  todoItemDeleteButton.classList.add('todo-list--button')
  const todoItemCheckbox = document.createElement('input');
  todoItemCheckbox.type = 'checkbox';

  todoItemTitle.textContent = title;
  todoItemDescription.textContent = description;
  todoItemPriority.textContent = priority;
  todoItemDeleteButton.textContent = 'Delete';

  switch (priority) {
    case 'low':
      todoItem.style.backgroundColor = '#10ad0a';
      todoItem.classList.add('todo-item');
      break;
    case 'mid':
      todoItem.style.backgroundColor = '#edd732';
      todoItem.classList.add('todo-item');
      break;
    case 'high':
      todoItem.style.backgroundColor = '#b31414';
      todoItem.classList.add('todo-item');
      break;
  }

  todoItemDeleteButton.addEventListener('click', () => {
    todoItem.remove();
  });

  todoItemCheckbox.addEventListener('change', () => {
    if (todoItemCheckbox.checked) {
      todoItemTitle.style.textDecoration = 'line-through';
      todoItemDescription.style.textDecoration = 'line-through';
    } else {
      todoItemTitle.style.textDecoration = 'none';
      todoItemDescription.style.textDecoration = 'none';
    }
  });

  todoItem.appendChild(todoItemTitle);
  todoItem.appendChild(todoItemDescription);
  todoItem.appendChild(todoItemPriority);
  todoItem.appendChild(todoItemDeleteButton);
  todoItem.appendChild(todoItemCheckbox);

  todoList.appendChild(todoItem);

  titleInput.value = '';
  descriptionInput.value = '';
  prioritySelect.value = 'low';
});

