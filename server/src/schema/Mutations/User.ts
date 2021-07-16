import { GraphQLString } from 'graphql'
import { UserType } from "../Types/User";
import { ICreateUser } from '../Interfaces/User'

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve(args: ICreateUser) {
        const { name, username, password } = args;
    }
};