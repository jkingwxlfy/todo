import { CSSTransition, TransitionGroup, } from 'react-transition-group';

import TodoListItem from '../todoListItem/TodoListItem';

import cl from './TodoList.module.scss';
import './animation.css';


const TodoList = ({ todos, onDeleteTodo, onSetCompleted, filter }) => {

    if (!todos.length && filter === 'all') {
        return (
            <h1 className={cl.nothing}>Write something todo</h1>
        )
    }

    if (!todos.length && filter === 'active') {
        return (
            <h1 className={cl.nothing}>Nothing active todos</h1>
        )
    }

    if (!todos.length && filter === 'completed') {
        return (
            <h1 className={cl.nothing}>Nothing completed todos</h1>
        )
    }

    return (
        <div className={cl.container}>
            <TransitionGroup>
                {todos.map(todo => {
                    return <CSSTransition
                        key={todo.id}
                        timeout={500}
                        classNames="todo"
                    >
                        <TodoListItem
                            key={todo.id}
                            title={todo.title}
                            onDeleteTodo={onDeleteTodo}
                            onSetCompleted={onSetCompleted}
                            todo={todo}
                        />
                    </CSSTransition>
                })}

            </TransitionGroup>

        </div >
    );
};

export default TodoList;