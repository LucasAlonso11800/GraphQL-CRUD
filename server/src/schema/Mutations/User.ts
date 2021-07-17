import { GraphQLID, GraphQLString } from 'graphql'
import { UserType } from "../Types/User";
import { MessageType } from "../Types/Messages";
import { ICreateUser } from '../Interfaces/User'
import { User } from '../../models/User';

export const CREATE_USER = {
    type: MessageType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { name, username, password } = args;
        let newUser = new User({ name, username, password })

        try {
            await User.insertMany(newUser)
            return { successful: true, message: "Succesfully created" }
        }
        catch (err) {
            return { successful: false, message: err.reason }
        }
    }
};

export const DELETE_USER = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
        try {
            await User.findByIdAndDelete({ _id: args.id })
            return { successful: true, message: "Succesfully deleted" }
        }
        catch (err) {
            return { successful: false, message: err.reason }
        }
    }
};

export const EDIT_USER = {
    type: MessageType,
    args: {
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { username, oldPassword, newPassword } = args;
        try {
            await User.updateOne(
                { username, password: oldPassword },
                { username, password: newPassword }
            )
            return { successful: true, message: "Succesfully updated" }
        }
        catch (err) {
            return { successful: false, message: err.reason }
        }
    }
};