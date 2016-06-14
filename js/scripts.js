var todoList = {
	todos: [],
	addTodo: function(desc) {
		this.todos.push({
			todoText: desc,
			completed: false 
		});
	},
	changeTodo: function(pos, desc) {
		this.todos[pos-1].todoText = desc;
	},
	deleteTodo: function(pos) {
		this.todos.splice(pos-1, 1);
	},
	toggleCompleted: function(pos) {
		this.todos[pos-1].completed = !this.todos[pos-1].completed;
	},
	toggleAll: function() {
		var totalTodos = this.todos.length,
		    completedTodos = 0;

		// Count completed todos
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed) {
				completedTodos++;
			}
		}

		// If everything's true, make it all false
		if ( completedTodos === totalTodos) {
			for (i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		} // Otherwise make it all true
		else {
			for (i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
	},
	resetTodo: function() {
		this.todos.splice(0, this.todos.length);
	}
};

var handlers = {
	addTodo: function() {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoTextInput.value = '';
        changeTodoPositionInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
        view.displayTodos();
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }
};

var view = {
	displayTodos: function() {
		// inits ul
		var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';

        // appends li objects for each todo
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement('li');
            var todo = todoList.todos[i];
            var todoTextWithCompletion = '';   

            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            }
            else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            todoLi.textContent = todoTextWithCompletion;
			todosUl.appendChild(todoLi);
		}
	}
};
