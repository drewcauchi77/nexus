var GraphQLSchema = require('graphql').GraphQLSchema;

var { LanguageModule } = require('./languageSchema');

module.exports = new GraphQLSchema(
    LanguageModule
);