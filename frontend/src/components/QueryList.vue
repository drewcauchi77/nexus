<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    list: Object,
});
</script>

<template>
    <div id="query-list">
        <template v-if="list && list.length > 0">
            <div class="table-header table-row">
                <strong class="table-item">ID</strong>
                <strong class="table-item">Name</strong>
                <strong class="table-item">Code</strong>
                <strong class="table-item">Action</strong>
            </div>

            <div class="table-row" v-for="(item, index) in list" :key="index">
                <span class="table-item">{{item.id ? item.id : ''}}</span>
                <span class="table-item">{{item.name ? item.name : ''}}</span>
                <span class="table-item">{{item.code ? item.code : ''}}</span>
                <div class="table-item">
                    <button-vue 
                      :link="`/languages/edit/${item.id}`" 
                      :color="'#3D8BE4'" 
                      :text="'Edit'" #
                      :icon="'fa-pen'" />
                </div>
            </div>
        </template>
        <span class="no-results" v-else>
            No Results - Absolutely Nothing to Show.
        </span>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

#query-list {
    .table-header {
        background-color: $highlight-color;
        color: $nice-black;
    }
    .table-row {
        display: flex;
        padding: 0 10px;
        height: 60px;
        margin-bottom: 10px;
        border-radius: $border-radius;
        box-shadow: $box-shadow;
        .table-item {
            width: 25%;
            align-self: center;
            margin: 0 10px;
        }
    }
    .no-results {
        display: block;
        text-align: center;
    }
}
</style>