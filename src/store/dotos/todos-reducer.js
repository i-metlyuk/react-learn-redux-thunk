import {ADD_TODO, ADD_TODOS, SET_ERROR, SET_LOADING} from "./todos-consts";

const initialState = {
    status: 'idle',
    todos: [],
    error: null
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        }
        case ADD_TODOS: {
            return {
                ...state,
                todos: action.payload,
                status: 'fulfilled'
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                status: 'loading',
                error: null
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                status: 'rejected',
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}