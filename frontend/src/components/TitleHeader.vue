<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    hasButton: Boolean,
});
</script>

<template>
    <div id="title-header">
        <h2>{{title}}</h2>
        <button-vue v-if="hasButton" 
          :link="`/languages/new`" 
          :color="'#2EA923'" 
          :text="'Create'" 
          :icon="'fa-plus'" />
    </div>
</template>

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