<template>
    <div id="title-header">
        <h2>{{title}}</h2>
        <button-vue :link="`/languages/new`" :color="'#2EA923'" :text="'Create'" :icon="'fa-plus'"></button-vue>
    </div>
</template>

<script>
import ButtonVue from '@/components/buttons/Button.vue';

export default {
    name: 'TitleHeader',
    props: {
        title: String,
    },
    components: {
        ButtonVue,
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables';

#title-header {
    margin-bottom: 40px;
    display: flex;
    grid-gap: 20px;
    align-items: center;
}
</style>