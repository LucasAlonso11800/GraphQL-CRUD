import { GraphQLList } from "graphql";
import { UserType } from "../Types/User";
import { User } from '../../models/User';

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    async resolve() {
        return await User.find()
    }
};