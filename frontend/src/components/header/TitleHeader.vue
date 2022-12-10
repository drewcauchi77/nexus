<template>
    <div id="title-header">
        <h2>{{title}}</h2>
        
        <div class="buttons">
            <div><router-link :to="`${$route.path}/new`">Add New Language</router-link></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TitleHeader',
    props: {
        title: String,
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables';

#title-header {
    h2 {
        margin-bottom: 20px;
    }
}
</style>