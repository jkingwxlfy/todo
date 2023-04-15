import MyButton from '../UI/button/MyButton';
import MyCheckBox from '../UI/checkbox/MyCheckBox';

import cl from './TodoListItem.module.scss';


const TodoListItem = ({ title, todo, onDeleteTodo, onSetCompleted }) => {

    return (
        <div className={cl.container}>
            <MyCheckBox checked={todo.completed} onChange={() => onSetCompleted(todo)} />
            <div className={cl.title}>
                <div className={todo.completed ? cl.completed : null}></div>
                {title}
            </div>
            <MyButton onClick={() => onDeleteTodo(todo)}>Delete</MyButton>
        </div>
    );
};

export default TodoListItem;