import React from 'react'
import { GET_ALL_USERS } from '../Graphql/Queries';
import { useQuery } from '@apollo/client';
import { IUser } from '../Interfaces';

function UserList() {
    const { error, loading, data } = useQuery(GET_ALL_USERS);

    if(loading) return <h4>Loading...</h4>
    if(error){
        console.log(error);
        return <h4>Error</h4>
    } 
    return (
        <>
            {data?.getAllUsers.map((user: IUser) => {
                return <div key={user.id}>
                    <p>{user.name} / {user.username}</p>
                </div>
            })}
        </>
    )
}

export default UserList
