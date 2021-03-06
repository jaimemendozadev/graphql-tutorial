import express from 'express';
import schema from './graphql/schema';
import bodyParser from 'body-parser';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';


const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));


app.listen(3000, () => console.log(`Go to http://localhost:3000/graphiql to run queries!`));