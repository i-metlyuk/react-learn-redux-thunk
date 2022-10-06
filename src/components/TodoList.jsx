import React from 'react';
import {useSelector} from "react-redux";
import {selectAllTodos} from "../store/dotos/todos-selectors";

const TodoList = () => {
    const {todos, status, error} = useSelector(selectAllTodos);

    return (
        <div>
            Todos: {todos.length}. Status: {status}. {error && <h4>{error}</h4>}
        </div>
    );
};

export default TodoList;