import { GraphQLString } from 'graphql'
import { UserType } from "../Types/User";
import { ICreateUser } from '../Interfaces/User'
import { User } from '../../models/User';

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { name, username, password } = args;
        let newUser = new User({ name, username, password })
        
        const user = await User.insertMany(newUser)

        return user[0]
    }
};