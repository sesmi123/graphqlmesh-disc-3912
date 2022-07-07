const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');
const data = require('../data');


const resolvers = {
    Query: {
        crm(parent, args, context) {
            return {...data};
        }
    },
    CRM: {
        companies(parent, args, context) {
            return data;
        } 
    },
    Company: {
        id(parent, args, context) {
            return parent.id;
        }
    }
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
    context: {}
});

server
    .listen(2010)
    .then(({ url }) =>
        console.log(`Server is running on ${url}`)
    );  