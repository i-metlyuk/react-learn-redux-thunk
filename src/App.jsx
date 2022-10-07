import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadUsers} from "./store/users/users-actions";
import {loadTodos} from "./store/dotos/todos-actions";
import NewTodo from "./components/NewTodo";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    useEffect(() => {
        dispatch(loadTodos())
    })

    return (
        <div className="App">
            <h1>Hello</h1>
            <NewTodo/>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <UserList/>
                <TodoList/>
            </div>
        </div>
    );
}

export default App;
