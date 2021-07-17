import React, { useState } from 'react'
import { UPDATE_PASSWORD } from '../Graphql/Mutations';
import { useMutation } from '@apollo/client';

function UpdatePassword() {
    const [username, setUsername] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

    return (
        <div>
            <input
                type="text"
                placeholder="Your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
                onClick={() => updatePassword({
                    variables: {
                        username,
                        oldPassword: currentPassword,
                        newPassword,
                    }
                })}
            >Update password</button>
        </div>
    )
}

export default UpdatePassword
