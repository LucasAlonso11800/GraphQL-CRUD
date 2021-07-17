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

export const DELETE_USER = gql`
    mutation(
        $id: ID! 
        ) {
        createUser(
            id: $id 
            ) {
                successful
                message
        }
    }
`;