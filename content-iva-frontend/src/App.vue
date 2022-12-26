<script setup>
import { ref } from 'vue';
import Alert from '@/components/Alerts.vue';
import SideMenu from '@/components/side_menu/SideMenu.vue';

const isMenuExpanded = ref(false);

function isSideMenuExpanded(value) {
    isMenuExpanded.value = value;
}
</script>

<template>
    <main id="main">
        <alert />
        <side-menu @isMenuExpanded="isSideMenuExpanded" />
        <div id="content" :class="{'restrict-width' : isMenuExpanded}">
            <router-view></router-view>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

#main {
    display: flex;
    max-width: 1900px;
    margin: 0 auto;
    #content {
        padding: 10px;
        margin: 30px 0;
        width: calc(100vw - 95px);
    }
}

@media only screen and (min-width: $screen-md) {
    #main {
        #content {
            &.restrict-width {
                width: calc(100vw - 211px);
            }
        }
    }
}

@media only screen and (min-width: $screen-lg) {
    #main {
        #content {
            padding: 30px;
            width: calc(100vw - 173px);
            &.restrict-width {
                width: calc(100vw - 303px);
            }
        }
    }
}
</style>