<template>
    <main id="main">
        <side-menu></side-menu>
        <div id="content">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
import SideMenu from '@/components/side_menu/SideMenu.vue';

export default {
    name: 'App',
    components: {
        SideMenu
    },
}
</script>

<style lang="scss" scoped>
#main {
    display: flex;
    #content {
        padding: 10px;
        // Side menu width + padding + content padding x 2
        width: calc(100vw - 82px);
    }
}
</style>