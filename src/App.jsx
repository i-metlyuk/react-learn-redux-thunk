import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadUsers} from "./store/users/users-actions";

function App() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadUsers())
    }, [])

    return (
        <div className="App">
            <h1>Hello</h1>
            <div style={{display: "flex", justifyContent:"space-between"}}>
                <UserList/>
                <TodoList/>
            </div>
        </div>
    );
}

export default App;
