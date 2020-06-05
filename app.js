const express = require('express');
const bodyParser = require('body-parser');
const graphQlHttp = require('express-graphql');
const mongoose = require('mongoose');
const app = express();
const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolver/index');
const isAuth = require('./middleware/isAuth');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(isAuth);
app.use('/api', graphQlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
}));

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-d3s40.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, { useFindAndModify: false })
    .then(() => {
        app.listen(3000);
    })
    .catch(err => { console.log(err) })