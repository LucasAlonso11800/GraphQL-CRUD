import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import mongoose from 'mongoose';

// import { schema } from './schema/schema';

const app = express();

app.use(cors());
app.use(express.json());

// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true
// }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`))