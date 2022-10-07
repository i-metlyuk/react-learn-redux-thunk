import {ADD_USERS} from "./users-consts";

export const addUsers = (users) => ({
    type: ADD_USERS,
    payload: users
})

export const loadUsers = () => (dispatch, _, client) => {
    client.get('users')
        .then(data => dispatch(addUsers(data)))
        .catch(e => console.error(e))
}