<template>
    <div id="side-menu">
        <div class="inner-side-menu">
            <side-menu-link :anchor="'/'" :anchorIcon="'fa-house-chimney'" :anchorText="'Home'" />
            <side-menu-link :anchor="'/languages'" :anchorIcon="'fa-language'" :anchorText="'Languages'" />
            <!-- <side-menu-link :anchor="'/'" :anchorIcon="'fa-house-chimney'" :anchorText="'Home'" />
            <side-menu-link :anchor="'/languages'" :anchorIcon="'fa-language'" :anchorText="'Languages'" />
            <side-menu-link :anchor="'/'" :anchorIcon="'fa-house-chimney'" :anchorText="'Home'" />
            <side-menu-link :anchor="'/languages'" :anchorIcon="'fa-language'" :anchorText="'Languages'" />
            <side-menu-link :anchor="'/'" :anchorIcon="'fa-house-chimney'" :anchorText="'Home'" />
            <side-menu-link :anchor="'/languages'" :anchorIcon="'fa-language'" :anchorText="'Languages'" />
            <side-menu-link :anchor="'/'" :anchorIcon="'fa-house-chimney'" :anchorText="'Home'" />
            <side-menu-link :anchor="'/languages'" :anchorIcon="'fa-language'" :anchorText="'Languages'" />
            <side-menu-link :anchor="'/'" :anchorIcon="'fa-house-chimney'" :anchorText="'Home'" />
            <side-menu-link :anchor="'/languages'" :anchorIcon="'fa-language'" :anchorText="'Languages'" />
            <side-menu-link :anchor="'/'" :anchorIcon="'fa-house-chimney'" :anchorText="'Home'" />
            <side-menu-link :anchor="'/languages'" :anchorIcon="'fa-language'" :anchorText="'Languages'" />
            <side-menu-link :anchor="'/'" :anchorIcon="'fa-house-chimney'" :anchorText="'Home'" />
            <side-menu-link :anchor="'/languages'" :anchorIcon="'fa-language'" :anchorText="'Languages'" />
            <side-menu-link :anchor="'/'" :anchorIcon="'fa-house-chimney'" :anchorText="'Home'" />
            <side-menu-link :anchor="'/languages'" :anchorIcon="'fa-language'" :anchorText="'Languages'" />
            <side-menu-link :anchor="'/'" :anchorIcon="'fa-house-chimney'" :anchorText="'Home'" />
            <side-menu-link :anchor="'/languages'" :anchorIcon="'fa-language'" :anchorText="'Languages'" />
            <side-menu-link :anchor="'/'" :anchorIcon="'fa-house-chimney'" :anchorText="'Home'" />
            <side-menu-link :anchor="'/languages'" :anchorIcon="'fa-language'" :anchorText="'Languages'" /> -->
        </div>
    </div>
</template>

<script>
import SideMenuLink from './SideMenuLink.vue';

export default {
    name: 'SideMenu',
    components: {
        SideMenuLink,
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables';

#side-menu {
    height: calc(100vh - 8px);
    width: 64px;
    max-width: 64px;
    position: sticky;
    top: 0;
    padding: 4px;
    flex: none;
    .inner-side-menu {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        overflow-x: hidden;
        height: 100%;
        background-color: $purple;
        border-radius: $border-radius;
        box-shadow: $box-shadow;
        .side-menu-item {
            &:first-child {
                margin-top: 40px;
            }
            &:last-child {
                margin-bottom: 40px;
            }
        }
    }
}
</style>