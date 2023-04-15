import { useState } from 'react';

import PostForm from '../postForm/PostForm';
import TodoList from '../todoList/TodoList';
import Filter from '../filter/Filter';

import './App.scss';


function App() {

    const [todos, setTodos] = useState([
        { id: 1, title: 'some todo', completed: false },
        { id: 2, title: 'some todo', completed: false },
        { id: 3, title: 'some todo', completed: false },
    ]);
    const [filter, setFilter] = useState('all');

    function onAddTodo(input) {
        setTodos([...todos, { id: Date.now(), title: input, completed: false }])
    }

    function onDeleteTodo(selectedTodo) {
        setTodos(todos.filter(todo => todo.id !== selectedTodo.id))
    }

    function onSetCompleted(selectedTodo) {
        setTodos(todos.map(todo => {
            if (todo.id === selectedTodo.id) {
                return { ...todo, completed: !selectedTodo.completed }
            }
            return todo;
        }))
    }

    function onSelectFilter(selectedFilter) {
        setFilter(selectedFilter);
    }

    function onFilterTodos(filter, todos) {
        switch (filter) {
            case "active":
                return todos.filter(item => !item.completed);
            case "completed":
                return todos.filter(item => item.completed);
            default:
                return todos;
        }
    }

    const visibleTodos = onFilterTodos(filter, todos)

    return (
        <div className="app">
            <h1 className="title">Todos</h1>
            <PostForm
                onAddTodo={onAddTodo}
            />
            <TodoList
                todos={visibleTodos}
                onDeleteTodo={onDeleteTodo}
                onSetCompleted={onSetCompleted}
                filter={filter}
            />
            <Filter
                todos={todos}
                filter={filter}
                onSelectFilter={onSelectFilter}
            />
        </div>
    );
}

export default App;
