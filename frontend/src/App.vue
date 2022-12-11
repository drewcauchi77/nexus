<template>
    <main id="main">
        <side-menu @isMenuExpanded="isSideMenuExpanded"></side-menu>
        <div id="content" :class="{'restrict-width' : isMenuExpanded}">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
import SideMenu from '@/components/side_menu/SideMenu.vue';

export default {
    name: 'App',
    data() {
        return {
            isMenuExpanded: false,
        }
    },
    components: {
        SideMenu
    },
    methods: {
        isSideMenuExpanded(value) {
            this.isMenuExpanded = value;
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables';

#main {
    display: flex;
    max-width: 1900px;
    margin: 0 auto;
    #content {
        padding: 10px;
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