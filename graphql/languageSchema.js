var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLDate = require('graphql-date');

var LanguageModel = require('../models').Language;

var languageType = new GraphQLObjectType({
    name: 'language',
    fields() {
        return {
            id: {
                type: GraphQLInt
            },
            name: {
                type: GraphQLString
            },
            code: {
                type: GraphQLString
            },
            createdAt: {
                type: GraphQLDate
            },
            updatedAt: {
                type: GraphQLDate
            }
        };
    }
});

var languageQuery = new GraphQLObjectType({
    name: 'languageQuery',
    fields() {
        return {
            languages: {
                type: new GraphQLList(languageType),
                resolve() {
                    const languages = LanguageModel.findAll({
                        order: [
                            ['createdAt', 'ASC']
                        ],
                    })
                    if (!languages) {
                        throw new Error('Error')
                    }
                    return languages
                }
            },
            language: {
                type: languageType,
                args: {
                    id: {
                        name: 'id',
                        type: GraphQLInt
                    },
                    code: {
                        name: 'code',
                        type: GraphQLString
                    }
                },
                resolve(root, params) {
                    let languageDetails;
                    if(params.id) {
                        languageDetails = LanguageModel.findByPk(params.id);
                    } else if(params.code) {
                        languageDetails = LanguageModel.findOne({ where: { code: params.code } });
                    }
                    
                    if (!languageDetails) {
                        throw new Error('Error')
                    }
                    return languageDetails
                }
            }
        }
    }
});

var languageMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields() {
        return {
            addLanguage: {
                type: languageType,
                args: {
                    name: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    code: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                },
                async resolve(root, params) {
                    let languageModel, newLanguage;
                    const isLanguageCodeUnique = await LanguageModel.findOne({ where: { code: params.code } }) !== null ? false : true;

                    if(isLanguageCodeUnique) {
                        languageModel = new LanguageModel(params);
                        newLanguage = languageModel.save();
                    } else {
                        throw new Error('Language Code Already exists');
                    }
                    
                    if (!newLanguage) {
                        throw new Error('Error');
                    }

                    return newLanguage
                }
            },
            updateLanguage: {
                type: languageType,
                args: {
                    id: {
                        name: 'id',
                        type: new GraphQLNonNull(GraphQLInt)
                    },
                    name: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    code: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                },
                resolve(root, params) {
                    return LanguageModel.findByPk(params.id).then(language => {
                        if (!language) {
                            throw new Error('Not found');
                        }

                        return language.update({
                            name: params.name || language.name,
                            code: params.code || language.code,
                        }).then(() => { 
                            return language; 
                        }).catch((error) => { 
                            throw new Error(error); 
                        });
                    }).catch((error) => { 
                        throw new Error(error); 
                    });
                }
            },
            removeLanguage: {
                type: languageType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLInt)
                    }
                },
                resolve(root, params) {
                    return LanguageModel.findByPk(params.id).then(language => {
                        if (!language) {
                            throw new Error('Not found');
                        }

                        return language.destroy({
                            // Remove
                        }).then(() => { 
                            return language; 
                        }).catch((error) => { 
                            throw new Error(error); 
                        });
                    }).catch((error) => { 
                        throw new Error(error); 
                    });
                }
            }
        }
    }
});

module.exports = {LanguageModule: {
    query: languageQuery, 
    mutation: languageMutation
}};