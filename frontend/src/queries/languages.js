import gql from 'graphql-tag';

const GET_LANGUAGES = gql`
    query getLanguages {
        languages {
            id
            name
            code
        }
    }
`;

const ADD_LANGUAGE = gql`
    mutation addLanguage ($name: String!, $code: String!){
        addLanguage(name: $name, code: $code) {
            id
            name
            code
        }
    }
`;

export { GET_LANGUAGES, ADD_LANGUAGE };