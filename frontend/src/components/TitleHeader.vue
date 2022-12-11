<template>
    <div id="title-header">
        <h2>{{title}}</h2>
        <button-vue v-if="hasButton" :link="`/languages/new`" :color="'#2EA923'" :text="'Create'" :icon="'fa-plus'"></button-vue>
    </div>
</template>

<script>
export default {
    name: 'TitleHeader',
    props: {
        title: String,
        hasButton: Boolean,
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables';

#title-header {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    h2 {
        margin-right: 20px;
    }
}

@media only screen and (min-width: $screen-lg) {
    #title-header {
        margin-bottom: 40px;
        h2 {
            margin-right: 40px;
        }
    }
}
</style>