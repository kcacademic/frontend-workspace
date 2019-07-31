var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var cors = require('cors')

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
	users: [User!]!
  }
  type User {
	id: ID
	username: String!
	email: String
  }
`);

// Maps id to User object
var users = [
  {
    id: '1',
    username: 'alice',
	email: 'alice@ace.com',
  },
  {
    id: '2',
    username: 'bob',
	email: 'bob@ace.com',
  },
];

// The root provides a resolver function for each API endpoint
var root = {
  users: () => {
    return users;
  },
};

var app = express();
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');