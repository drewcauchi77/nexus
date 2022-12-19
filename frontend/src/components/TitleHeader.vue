<script setup>
import { defineProps, defineEmits } from 'vue';
import Search from './Search.vue';

const props = defineProps({
    title: String,
    hasButton: Boolean,
    withSearch: Boolean,
    searchList: Object,
});
</script>

<template>
    <div id="title-header">
        <div class="title-section">
            <h2>{{title}}</h2>
            <button-vue v-if="hasButton" 
              :link="`/languages/new`" 
              :color="'#18bdb1'" 
              :text="'Create'" 
              :icon="'fa-plus'" />
        </div>
        <search v-if="withSearch && searchList.length > 0"
          :searchList="searchList" />
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

#title-header {
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    .title-section {
        display: flex;
        align-items: center;
        h2 {
            margin-right: 20px;
        }
    }
}

@media only screen and (min-width: $screen-lg) {
    #title-header {
        margin-bottom: 40px;
        flex-direction: row;
        .title-section {
            h2 {
                margin-right: 40px;
            }
        }
    }
}
</style>