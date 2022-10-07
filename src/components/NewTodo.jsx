import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {createTodo} from "../store/dotos/todos-actions";

const NewTodo = () => {
    const dispatch = useDispatch();
    const [todoTitle, setTodoTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createTodo(todoTitle))
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="new todo"
                value={todoTitle}
                onChange={(event)=>setTodoTitle(event.currentTarget.value)}
            />
            <input type="submit" value="Add Todo"/>
        </form>
    );
};

export default NewTodo;