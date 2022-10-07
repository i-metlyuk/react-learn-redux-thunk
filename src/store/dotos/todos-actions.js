import {ADD_TODO, ADD_TODOS, SET_ERROR, SET_LOADING} from "./todos-consts";
import uuid from "react-uuid";

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
})

export const addTodos = (todos) => ({
    type: ADD_TODOS,
    payload: todos
})

export const setLoading = () => ({
    type: SET_LOADING,
})

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error
})

export const loadTodos = () => (dispatch, _, client) => {
    dispatch(setLoading());

    client.get('todos', {
        params: {
            _limit: 10
        }
    })
        .then(data => dispatch(addTodos(data)))
        .catch(e => dispatch(setError(e)))
}

export const createTodo = (title) => (dispatch, _, client) => {
    client.post('todos', {
        data: {
            title: title,
            completed: false,
            id: uuid()
        }
    })
        .then(newTodo => dispatch(addTodo(newTodo)))
        .catch(e => dispatch(setError(e)))
}