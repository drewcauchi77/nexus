<script setup>
import { defineProps, defineEmits } from 'vue';

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
          :color="'#18bdb1'" 
          :text="'Create'" 
          :icon="'fa-plus'" />
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

#title-header {
    display: flex;
    h2, button {
        margin-right: 20px;
        align-self: center;
    }
}

@media only screen and (min-width: $screen-lg) {
    #title-header {
        h2, button {
            margin-right: 40px;
        }
    }
}
</style>