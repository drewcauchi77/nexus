<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';
import InputVue from './Input.vue';

const searchText = ref('');
const searchResults = ref([]);

const props = defineProps({
    searchList: Object,
});
</script>

<template>
    <div id="search">
        <input-vue 
          :placeholder="'Search...'" 
          :name="'search'" 
          v-model="searchText" />
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

#search {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    margin-top: 20px;
    .input {
        margin-bottom: 0px;
        width: 100%;
    }
}

@media only screen and (min-width: $screen-lg) {
    #search {
        margin-top: 0;
        margin-left: 40px;
        .input {    
            max-width: 500px;
        }
    }
}
</style>