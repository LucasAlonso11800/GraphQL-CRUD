import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../Graphql/Mutations';

function CreateUser() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [createUser, { error, loading, data }] = useMutation(CREATE_USER)
    console.log(error, loading, data)

    return (
        <div className="createUser">
            <input
                type="text"
                placeholder="Insert name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Insert username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Insert password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => createUser({
                variables: { name, username, password }
            })}>
                Create user
            </button>
        </div>
    )
}

export default CreateUser
