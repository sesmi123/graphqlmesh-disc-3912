const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');
const data = require('../data');


const resolvers = {
    Query: {
        companySettingsReportEmail(parent, args, context) {
            return data.find(x => x.id === args.companyId).email;
        }
    },
    ReportEmail: {
        reportEmail(parent, args, context) {
            return parent.value;
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
    .listen(2009)
    .then(({ url }) =>
        console.log(`Server is running on ${url}`)
    );  