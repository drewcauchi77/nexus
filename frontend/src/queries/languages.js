import gql from 'graphql-tag';

export const GET_LANGUAGES = gql`
    query {
        languages {
            name
            code
        }
    }
`;