import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation(
        $name: String! 
        $username: String! 
        $password: String!
        ) {
        createUser(
            name: $name 
            username: $username 
            password: $password
            ) {
                successful
                message
        }
    }
`;

export const UPDATE_PASSWORD = gql`
    mutation(
        $username: String! 
        $oldPassword: String! 
        $newPassword: String!
        ) {
        editUser(
            username: $username 
            oldPassword: $oldPassword 
            newPassword: $newPassword
            ) {
                successful
                message
        }
    }
`;


export const DELETE_USER = gql`
    mutation($id: ID!) {
        deleteUser(id: $id) {
            successful
            message
        }
    }
`;