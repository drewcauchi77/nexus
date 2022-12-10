<template>
    <div id="query-list">
        <template v-if="list">
            <div class="table-header table-row">
                <span class="table-item">ID</span>
                <span class="table-item">NAME</span>
                <span class="table-item">CODE</span>
                <span class="table-item">ACTION</span>
            </div>

            <div class="table-row" v-for="(item, index) in list" :key="index">
                <span class="table-item">{{item.id ? item.id : ''}}</span>
                <span class="table-item">{{item.name ? item.name : ''}}</span>
                <span class="table-item">{{item.code ? item.code : ''}}</span>
                <span class="table-item">
                    <router-link :to="`/languages/edit/${item.id}`">Edit</router-link>
                </span>
            </div>
        </template>
        <span v-else></span>
    </div>
</template>

<script>
export default {
    name: 'QueryList',
    props: {
        list: Object,
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables';

#query-list {
    max-width: 1600px;
    .table-header {
        background-color: $nice-black;
        color: $highlight-color;
    }
    .table-row {
        display: flex;
        grid-gap: 10px;
        padding: 0 10px;
        height: 60px;
        margin-bottom: 10px;
        border-radius: $border-radius;
        box-shadow: $box-shadow;
        .table-item {
            width: 25%;
            align-self: center;
        }
    }
}
</style>