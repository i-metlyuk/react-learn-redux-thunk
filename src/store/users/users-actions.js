import {ADD_USERS} from "./users-consts";
import {client} from "../../api";

export const addUsers = (users) => ({
    type: ADD_USERS,
    payload: users
})

export const loadUsers = () => (dispatch) => {
    client.get('users')
        .then(data => dispatch(addUsers(data)))
        .catch(e => console.error(e))
}