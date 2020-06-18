const express = require("express");
const bodyParser = require("body-parser");
const graphQlHttp = require("express-graphql");
const mongoose = require("mongoose");
const app = express();
const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolver/index");
const isAuth = require("./middleware/isAuth");
var cors = require("cors");
var { formatError, FormatError } = require("./graphql/errors/index");

const errorName = formatError.errorName;

app.use(cors());
app.use(bodyParser.json());
app.use(isAuth);
app.use(
  "/api",
  graphQlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
    context: { errorName },
    formatError: (err) => {
      return formatError.getError(err);
    },
  })
);

mongoose
  .connect(
    `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_ENDPOINT}/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
    { useFindAndModify: false }
  )
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
