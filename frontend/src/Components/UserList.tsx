import React from 'react'
import { GET_ALL_USERS } from '../Graphql/Queries';
import { DELETE_USER } from '../Graphql/Mutations';
import { useQuery, useMutation } from '@apollo/client';
import { IUser } from '../Interfaces';

function UserList() {
    const { data } = useQuery(GET_ALL_USERS);
    const [deleteUser, { error }] = useMutation(DELETE_USER);

    return (
        <>
            {data?.getAllUsers.map((user: IUser) => {
                console.log(user.id)
                return <div key={user.id}>
                    <p>{user.name} / {user.username}</p>
                    <button onClick={() =>
                        deleteUser({
                            variables: { id: user.id }
                        })}
                    >Delete</button>
                </div>
            })}
        </>
    )
}

export default UserList
