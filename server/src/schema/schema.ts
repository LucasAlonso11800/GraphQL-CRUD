import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';
import { GET_ALL_USERS } from './Queries/User';
import { CREATE_USER, DELETE_USER, EDIT_USER } from './Mutations/User';

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getAllUsers: GET_ALL_USERS
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: CREATE_USER,
        deleteUser: DELETE_USER,
        editUser: EDIT_USER
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});