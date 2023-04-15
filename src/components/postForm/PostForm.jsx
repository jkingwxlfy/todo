import { useState } from 'react';

import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';

import cl from './PostForm.module.scss';


const PostForm = ({ onAddTodo }) => {

    const [input, setInput] = useState('');

    function onAddedTodo() {
        if (input.length > 2) {
            onAddTodo(input);
            setInput('');
        }
    }

    return (
        <div className={cl.container}>
            <MyInput
                onChange={(event) => setInput(event.target.value)}
                value={input}
            />
            <MyButton onClick={onAddedTodo}>
                Add todo
            </MyButton>
        </div>
    );
};

export default PostForm;