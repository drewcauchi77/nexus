<template>
    <div class="side-menu-item">
        <router-link :to="anchor">
            <div class="active-link"></div>
            <div class="link-section">
                <icon :icon="anchorIcon" />
                <span>{{anchorText}}</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'SideMenuLink',
    props: {
        anchor: String,
        anchorIcon: String,
        anchorText: String,
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables';

.side-menu-item {
    margin: 4px 0;
    text-align: center;
    font-size: 14px;
    a {
        color: $white;
        display: block;
        position: relative;
        .active-link {
            display: none;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 3px;
            background: $white;
            margin: auto;
            height: 100%;
            border-radius: 0 $border-radius $border-radius 0;
        }
        .link-section {
            display: flex;
            grid-gap: 25px;
            padding: 15px 12px;
        }
        &.router-link-active, &.router-link-exact-active {
            .active-link {
                display: block;
            }
        }
        &:hover {
            .active-link {
                display: block;
            }
        }
    }
}
</style>

<style lang="scss">
.side-menu-item {
    a {
        svg {
            width: 22px;
            height: auto;
            padding: 0 9px;
            flex: none;
        }
    }
}
</style>