import React from 'react';
import {useSelector} from "react-redux";
import {selectAllUsers} from "../store/users/users-selectors";

const UserList = () => {
    const users = useSelector(selectAllUsers)
    return (
        <div>
            {
                users.map(user => (
                    <div key={user.id}>{user.name}</div>
                ))
            }
        </div>
    );
};

export default UserList;