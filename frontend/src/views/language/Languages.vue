<template>
    <div>
        Languages<br/>
        Here you can:<br/>
         - Delete a Language<br/>
         - Take you to a page to add a new Language<br/>
         - Take you to a page to edit a language<br/>
        
        <ul v-if="languages">
            <li v-for="lang in languages">{{lang.name}}</li>
        </ul>
    </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
    name: 'Languages',
    apollo: {
        // Simple query that will update the 'hello' vue property
        languages: gql`query {
            languages {
                name
                code
            }
        }`,
    },
}
</script>

<style lang="scss" scoped>

</style>