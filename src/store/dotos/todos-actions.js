import {ADD_TODOS, SET_ERROR, SET_LOADING} from "./todos-consts";
import {client} from "../../api";

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

export const loadTodos = () => (dispatch) => {
    dispatch(setLoading());

    client.get('https://jsonplaceholder.typicode.com/todos?_limit=10 ', {
        limit: 10
    })
        .then(data => dispatch(addTodos(data)))
        .catch(e => dispatch(setError(e)))
}